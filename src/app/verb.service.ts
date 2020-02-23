import {Injectable} from '@angular/core';
import {CommandContext} from '../Model/CommandContext';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  constructor() { }

  public handleEat(context: CommandContext): void {
    context.checkVerb('eat');
    switch (context.sentence.target) {
      case 'blanket':
        context.addText(`No way! That's my favorite blanket!`);
        break;
      case 'Crate':
      case 'Door':
        context.addText(`You gnaw on the side of the crate, but the crate isn't tasty and that hurts a bit.`);
        break;
      case undefined:
        context.addError(`If you want to eat something, you'll need to say what you want to eat. Try saying 'eat the kibble' or similar.`);
        break;
      default:
        context.addText(`On second thought, it doesn't look all that tasty.`);
        break;
    }
  }

  public handlePush(context: CommandContext): void {
    context.checkVerb('push');
    switch (context.sentence.target) {
      case 'blanket':
        context.addText('You rearrange the blanket and get it just the way you like it.');
        break;
      case 'Crate':
        context.addText(`You push the side of the crate, but the crate doesn't move. You're just not that big of a dog.`);
        break;
      case 'Door':
        context.addText(`You push the door to the crate but it doesn't budge. It must be locked.`);
        break;
      case undefined:
        context.addError(`You can't push nothing. Try saying 'push the crate' or similar.`);
        break;
      default:
        context.addText(`Pushing it doesn't result in anything interesting.`);
        break;
    }
  }

  public handleListen(context: CommandContext): void {
    context.checkVerb('listen');
    switch (context.sentence.target) {
      case undefined:
        context.addText(`You stop everything and listen. A few moments pass, but you don't hear anything interesting.`);
        break;
      default:
        context.addText(`It doesn't seem to be making many sounds.`);
        break;
    }
  }

  public handleSmell(context: CommandContext): void {
    context.checkVerb('smell');

    switch (context.sentence.target) {
      case 'blanket':
        context.addText('It smells just like me! I love this blanket!');
        break;
      case 'Crate':
      case 'Door':
        context.addText(`Yeah, that doesn't really smell like much.`);
        break;
      case undefined:
        context.addText(`You take a quick mix of shallow and deep sniffs in, but don't smell anything surprising.`);
        break;
      default:
        context.addText(`It's smell isn't very surprising or interesting.`);
        break;
    }
  }

  public handleThinkAbout(context: CommandContext): void {
    context.checkVerb('think');
    switch (context.sentence.target) {
      case 'blanket':
        context.addText('You LOVE this blanket. Best blanket ever!');
        break;
      case 'Crate':
        context.addText(`You do not like the crate. It is the box of shame. You want to not be in the crate.`);
        break;
      case 'Door':
        context.addText(`You wish the door was open.`);
        break;
      case undefined:
        context.addText(`You think about things and ultimately regret not barking at as many ` +
          `squirrels as you would have wanted to by this age.`);
        break;
      default:
        context.addText(`You think about ${context.sentence.target}, but for whatever reason that doesn't make food appear.`);
        break;
    }
  }

  public handleLook(context: CommandContext): void {
    context.checkVerb('look');
    if (context.sentence.target) {
      context.addText(`The ${context.sentence.target} is pretty much as you'd expect.`);
    } else {
      context.describeCurrentRoom(true);
    }
  }

  public getHandler(verb: string): (context: CommandContext) => void | undefined {
    switch (verb) {
      case 'eat':
        return this.handleEat;
      case 'push':
      case 'open':
        return this.handlePush;
      case 'look':
      case 'examine':
      case 'inspect':
      case 'peruse':
        return this.handleLook;
      case 'listen':
        return this.handleListen;
      case 'smell':
      case 'sniff':
        return this.handleSmell;
      case 'think':
      case 'remember':
      case 'consider':
        return this.handleThinkAbout;
      default:
        return undefined;
    }
  }
}
