import {Injectable} from '@angular/core';
import {CommandContext} from '../Model/CommandContext';
import {Word} from '../Model/Parsing/Word';
import {objectResponse} from '../Model/World/GameObject';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  private static handleVerb(context: CommandContext, verbName: string, nonTargetedResponse: string, genericResponse: string): boolean {
    context.checkVerb(verbName);

    const target = context.sentence.target;
    if (target) {
      return this.handleTargetedVerb(verbName, target, context, genericResponse);
    } else {
      context.addText(nonTargetedResponse);
      return true;
    }
  }

  private static handleTargetedVerb(verbName: string, target: Word, context: CommandContext, genericResponse: string): boolean {
    const gameObject = target.gameObject;
    if (gameObject) {
      const handler: objectResponse = gameObject[verbName];
      if (handler) {
        switch (typeof handler) {
          case 'string':
            context.addText(handler as string);
            break;
          default:
            const action = handler as ((context: CommandContext) => void);
            action(context);
            break;
        }
      } else {
        context.addText(genericResponse);
      }
      return true;
    } else {
      context.addDontSee(target);
      return false;
    }
  }

  public handleLook(context: CommandContext): boolean {
    context.checkVerb('look');
    const target = context.sentence.target;
    if (target) {
      return VerbService.handleTargetedVerb('look', target, context, `The ${target.reduced} is pretty much as you'd expect.`);
    } else {
      context.describeCurrentRoom(true);
      return true;
    }
  }

  public handleEat(context: CommandContext): boolean {
    return VerbService.handleVerb(context,
      'eat',
      `If you want to eat something, you'll need to say what you want to eat. Try saying 'eat the kibble' or similar.`,
      `On second thought, it doesn't look all that tasty.`);
  }

  public handlePush(context: CommandContext): boolean {
    return VerbService.handleVerb(context,
      'push',
      `You can't push nothing. Try saying 'push the crate' or similar.`,
      `Pushing it doesn't result in anything interesting.`);
  }

  public handleListen(context: CommandContext): boolean {
    return VerbService.handleVerb(context,
      'listen',
      `You stop everything and listen. A few moments pass, but you don't hear anything interesting.`,
      `It doesn't seem to be making many sound at the moment.`);
  }

  public handleSmell(context: CommandContext): boolean {
    return VerbService.handleVerb(context,
      'smell',
      `You take a quick mix of shallow and deep sniffs in, but don't smell anything surprising.`,
      `It's smell isn't very surprising or interesting.`);
  }

  public handleThinkAbout(context: CommandContext): boolean {
    return VerbService.handleVerb(context,
      'think',
      `You do some thinking and feel like you still have the wiggles. Time to roam the house and make a mess!`,
      `You stare at it and think, but nothing interesting comes to mind. You find yourself suddenly wanting to destroy things.`);
  }

  public handleGo(context: CommandContext): boolean {
    context.checkVerb('go');

    const target = context.sentence.target;
    if (!target) {
      context.addError(`You need to say which way you want to go. For example, try 'go to the north' or 'go west'`);
      return false;
    } else if (target.room !== undefined && target.room !== context.currentRoom) {
      context.changeRoom(target.room, target.text);
      return true;
    } else {
      context.addError(`You can't go that way`);
      return false;
    }
  }

  public handleBark(context: CommandContext): boolean {
    return VerbService.handleVerb(context,
      'bark',
      `You tilt your head back and bark loudly at the entire world. The world ignores you.`,
      `You glare at it and give it your fiercest bark. It makes no move in response. It must be scared.`);
  }

  public handleGet(context: CommandContext): boolean {
    return VerbService.handleVerb(context,
      'take',
      `Try tying what you'd like to get, for example 'Get blanket'.`,
      `You can't take that with you, sadly.`);
  }
  public handleTaste(context: CommandContext): boolean {
    return VerbService.handleVerb(context,
      'lick',
      `Try tying what you'd like to lick, for example 'Lick the chair'.`,
      `You\'ve licked that before when you were puppy and don\'t want to repeat the experience.`);
  }

  public getHandler(verb: string): (context: CommandContext) => boolean | undefined {
    switch (verb) {
      case 'eat':
        return this.handleEat.bind(this);
      case 'push':
      case 'open':
        return this.handlePush.bind(this);
      case 'look':
      case 'examine':
      case 'inspect':
      case 'peruse':
        return this.handleLook.bind(this);
      case 'listen':
        return this.handleListen.bind(this);
      case 'smell':
      case 'sniff':
        return this.handleSmell.bind(this);
      case 'taste':
      case 'lick':
        return this.handleTaste.bind(this);
      case 'bark':
      case 'growl':
      case 'howl':
      case 'yell':
      case 'talk':
      case 'yip':
      case 'arf':
      case 'roo':
        return this.handleBark.bind(this);
      case 'think':
      case 'remember':
      case 'consider':
        return this.handleThinkAbout.bind(this);
      case 'go':
      case 'walk':
      case 'run':
        return this.handleGo.bind(this);
      case 'get':
      case 'take':
        return this.handleGet.bind(this);
      default:
        return undefined;
    }
  }
}
