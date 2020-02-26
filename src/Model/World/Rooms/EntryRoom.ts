import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class EntryRoom extends RoomBase {
  objects: GameObject[];

  constructor() {
    super('Entryway', Room.Entry);
    this.objects = [];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the entryway`);
  }
}
