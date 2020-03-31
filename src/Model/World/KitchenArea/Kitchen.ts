import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {PlaceholderObject} from '../PlaceholderObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';

export class Kitchen extends RoomBase {
  objects: GameObject[];

  east = Room.Dining;

  constructor() {
    super('Kitchen', Room.Kitchen);
    this.objects = [
      new PlaceholderObject('crumb'),
      new PlaceholderObject('floor'),
      new PlaceholderObject('trashcan'),
      new PlaceholderObject('bowl'),
    ];
  }

  describe(context: CommandContext): void {
    context.addText(`The kitchen is an amazing place. Mommy cooks food here sometimes and will sometimes give me a crumb or two. ` +
      `Sometimes I can also find crumbs on the floor if I sniff around for them.`);
    context.addText(`The rest of the house is to the east.`);
    context.addText(`A trashcan and my water bowl are here.`);
  }
}
