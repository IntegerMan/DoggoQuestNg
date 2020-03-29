import {CommandContext} from '../../CommandContext';
import {GameObjectBase} from '../GameObjectBase';

export class CrateDoorObject extends GameObjectBase {
  constructor(private inCrate: boolean)  {
    super('door');

    this.smell = 'It smells like metal.';
    this.lick = 'It tastes smooth, cold, and boring.';
    this.push = this.handlePushed;
    this.look = this.handleLook;
  }

  private  handlePushed(context: CommandContext): void {
    if (context.world.isCrateOpen) {
      if (this.inCrate) {
        context.addText('The door is already open. In order to push it, you\'d have to leave the crate first.');
      } else {
        context.addText('You don\'t really want to push it. It could pinch you and besides, you\'re already out of the crate.');
      }
    } else {
      context.addText('You push the door and it flies open. You\'re free!');
      context.world.isCrateOpen = true;
      context.increaseScore(1);
    }
  }

  private handleLook(context: CommandContext): void {
    if (context.world.isCrateOpen) {
      if (this.inCrate) {
        context.addText('The door is open and the house practically invites you to explore it.');
      } else {
        context.addText('The door is open and leads back to the crate to the south.');
      }
    } else {
      context.addText('Something about the door looks different. It doesn\'t look as shut as it usually is. Could it be they forgot to actually lock it?');
    }
  }
}
