import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {LivingRoomObject} from '../KitchenArea/LivingRoomObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';

export class LivingRoom extends RoomBase {
  objects: GameObject[];

  west = Room.Dining;
  in = Room.UnderCouch;
  under = Room.UnderCouch;

  constructor() {
    super('Living Room', Room.Living);
    this.objects = [
      new LivingRoomObject(Room.Living)
    ];
  }

  describe(context: CommandContext): void {
    context.addText(`This is where mommy and daddy spend most of their time when they're home. They call it the living room, but it's ` +
      `really just a big room with a couch, a table, a TV, and my box of toys.`);
    context.addText(`The dining room is back to the west, and sometimes I like to go inside the couch and rest there.`);
  }
}
