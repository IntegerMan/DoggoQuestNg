import {Injectable} from '@angular/core';
import {CommandContext} from '../Model/CommandContext';
import {Word} from '../Model/Parsing/Word';
import {objectResponse} from '../Model/World/GameObject';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  private static handleVerb(context: CommandContext, verbName: string, nonTargetedResponse: string, genericResponse: string): void {
    context.checkVerb(verbName);

    const target = context.sentence.target;
    if (target) {
      this.handleTargetedVerb(verbName, target, context, genericResponse);
    } else {
      context.addText(nonTargetedResponse);
    }
  }

  private static handleTargetedVerb(verbName: string, target: Word, context: CommandContext, genericResponse: string) {
    const gameObject = target.gameObject;
    if (gameObject) {
      const handler: objectResponse = gameObject[verbName];
      if (handler) {
        const action = handler as ((context: CommandContext) => void);
        if (action) {
          action(context);
        } else {
          context.addText(handler as string);
        }
      } else {
        context.addText(genericResponse);
      }
    } else {
      context.addDontSee(target);
    }
  }

  public handleLook(context: CommandContext): void {
    context.checkVerb('look');
    const target = context.sentence.target;
    if (target) {
      VerbService.handleTargetedVerb('look', target, context, `The ${target.reduced} is pretty much as you'd expect.`);
    } else {
      context.describeCurrentRoom(true);
    }
  }

  public handleEat(context: CommandContext): void {
    VerbService.handleVerb(context,
      'eat',
      `If you want to eat something, you'll need to say what you want to eat. Try saying 'eat the kibble' or similar.`,
      `On second thought, it doesn't look all that tasty.`);
  }

  public handlePush(context: CommandContext): void {
    VerbService.handleVerb(context,
      'push',
      `You can't push nothing. Try saying 'push the crate' or similar.`,
      `Pushing it doesn't result in anything interesting.`);
  }

  public handleListen(context: CommandContext): void {
    VerbService.handleVerb(context,
      'listen',
      `You stop everything and listen. A few moments pass, but you don't hear anything interesting.`,
      `It doesn't seem to be making many sound at the moment.`);
  }

  public handleSmell(context: CommandContext): void {
    VerbService.handleVerb(context,
      'smell',
      `You take a quick mix of shallow and deep sniffs in, but don't smell anything surprising.`,
      `It's smell isn't very surprising or interesting.`);
  }

  public handleThinkAbout(context: CommandContext): void {
    VerbService.handleVerb(context,
      'think',
      `You do some thinking and feel like you still have the wiggles. Time to roam the house and make a mess!`,
      `You stare at it and think, but nothing interesting comes to mind. You find yourself suddenly wanting to destroy things.`);
  }

  public handleGo(context: CommandContext): void {
    context.checkVerb('go');

    const target = context.sentence.target;
    if (!target) {
      context.addError(`You need to say which way you want to go. For example, try 'go to the north' or 'go west'`);
    } else if (target.room !== undefined && target.room !== context.currentRoom) {
      context.changeRoom(target.room, target.text);
    } else {
      context.addError(`You can't go that way`);
    }
  }

  public handleBark(context: CommandContext): void {
    VerbService.handleVerb(context,
      'bark',
      `You tilt your head back and bark loudly at the entire world. The world ignores you.`,
      `You glare at it and give it your fiercest bark. It makes no move in response. It must be scared.`);
  }

  public getHandler(verb: string): (context: CommandContext) => void | undefined {
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
      default:
        return undefined;
    }
  }
}
