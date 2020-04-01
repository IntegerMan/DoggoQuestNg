import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';
import {DiningObject} from './DiningObject';
import {HallwayObject} from './HallwayObject';
import {KitchenObject} from './KitchenObject';
import {LivingRoomObject} from './LivingRoomObject';

export class Dining extends RoomBase {
  objects: GameObject[];

  west = Room.Kitchen;
  east = Room.Living;
  north = Room.Entryway;

  constructor() {
    super('Dining Room', Room.Dining);
    this.objects = [
      new DiningObject(Room.Dining),
      new KitchenObject(Room.Dining),
      new HallwayObject(Room.Dining),
      new LivingRoomObject(Room.Dining),
    ];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the dining room. I like to beg at the table when mommy and daddy eat, but I usually have to eat out of my ` +
      `food bowl instead.`);
    context.addText(`The kitchen is to the west and the living room is to the west. The hall goes north to the entryway.`);
  }
}
