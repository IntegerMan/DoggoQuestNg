import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {PlaceholderObject} from '../PlaceholderObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';

export class Dining extends RoomBase {
  objects: GameObject[];

  west = Room.Kitchen;
  east = Room.Living;
  north = Room.Entryway;

  constructor() {
    super('Dining Room', Room.Dining);
    this.objects = [
      new PlaceholderObject('table'),
      new PlaceholderObject('chair'),
      new PlaceholderObject('door'),
      new PlaceholderObject('window'),
      new PlaceholderObject('outside'),
      new PlaceholderObject('bowl'),
      new PlaceholderObject('kitchen'),
      new PlaceholderObject('hall'),
      new PlaceholderObject('livingroom'),
    ];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the dining room. I like to beg at the table when mommy and daddy eat, but I usually have to eat out of my ` +
      `food bowl instead.`);
    context.addText(`The kitchen is to the west and the living room is to the west. The hall goes north to the entryway.`);
  }
}
