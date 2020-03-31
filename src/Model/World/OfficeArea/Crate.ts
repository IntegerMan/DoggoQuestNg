import {CommandContext} from '../../CommandContext';
import {CrateObject} from './CrateObject';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';

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
    this.objects = [
      new CrateObject(true)
    ];
  }

  describe(context: CommandContext): void {
    context.addText(`You're in your crate yet again. It's a small crate large enough for you to rest comfortably, but not move around in.`);
    context.addText('There is a blanket on the floor and a door to the crate in front of you.');
    context.addText('You do not like it here.');
  }

}
