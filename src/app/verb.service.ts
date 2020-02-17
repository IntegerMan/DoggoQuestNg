import {Injectable} from '@angular/core';
import {CommandContext} from '../Model/CommandContext';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  constructor() { }

  public handleEat(context: CommandContext): void {
    context.checkVerb('eat');
    context.addError(`You can't eat yet.`);
  }

  public handlePush(context: CommandContext): void {
    context.checkVerb('push');
    context.addError(`You can't push things yet.`);
  }

  public handleListen(context: CommandContext): void {
    context.checkVerb('listen');
    context.addText(`You stop everything and listen. A few moments pass, but you don't hear anything interesting.`);
  }

  public handleSmell(context: CommandContext): void {
    context.checkVerb('smell');
    context.addText(`You take a quick mix of shallow and deep sniffs in, but don't smell anything surprising.`);
  }

  public handleThinkAbout(context: CommandContext): void {
    context.checkVerb('think');
    context.addText(`You think about things and ultimately regret not barking at as many ` +
      `squirrels as you would have wanted to by this age.`);
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
