import {CommandContext} from '../../CommandContext';
import {CrateObject} from '../Objects/CrateObject';
import {GameObject} from '../Objects/GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class Crate extends RoomBase {
  objects: GameObject[];

  north = Room.Office;
  out = Room.Office;

  tryGoOut(context: CommandContext): boolean {
    return this.tryGoNorth(context);
  }

  tryGoNorth(context: CommandContext): boolean {
    if (!context.world.isCrateOpen) {
      context.addText('The crate door is shut and blocks your way.');
      return true;
    }
    return false;
  }

  constructor() {
    super('In Crate', Room.InCrate);
    this.objects = [{
      name: 'door',
      smell: 'It smells like metal.',
      lick: 'It tastes smooth, cold, and boring.',
      push: (context: CommandContext) => {
        if (context.world.isCrateOpen) {
          context.addText('The door is already open. In order to push it, you\'d have to leave the crate first.');
        } else {
          context.addText('You push the door and it flies open. You\'re free!');
          context.world.isCrateOpen = true;
          context.increaseScore(1);
        }
      },
      look: (context: CommandContext) => {
        if (context.world.isCrateOpen) {
          context.addText('The door is open and the house practically invites you to explore it.');
        } else {
          context.addText('Something about the door looks different. It doesn\'t look as shut as it usually is. Could it be they forgot to actually lock it?');
        }
      }
    },
      {
        name: 'blanket',
        look: 'The blanket is soft and snuggly. You like it.',
        smell: 'It smells like you!',
        eat: 'You would never want to hurt your precious blanket!',
        take: 'You really should leave it in your crate. The crate is uncomfortable to lay down in without a nice soft blanket',
        lick: 'It\'s not that interesting to taste. You lick it sometimes while you sleep in your crate, but it just tastes like blanket.'
      },
      new CrateObject(true)
    ];
  }

  describe(context: CommandContext): void {
    context.addText(`You're in your crate yet again. It's a small crate large enough for you to rest comfortably, but not move around in.`);
    context.addText('There is a blanket on the floor and a door to the crate in front of you.');
    context.addText('You do not like it here.');
  }

}
