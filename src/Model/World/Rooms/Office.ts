import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class Office extends RoomBase {
  objects: GameObject[];

  east = Room.Entry;
  south = Room.InCrate;

  constructor() {
    super('Office', Room.Office);
    this.objects = [];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the office`);
  }
}
