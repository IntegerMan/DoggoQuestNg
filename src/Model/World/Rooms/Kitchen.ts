import {CommandContext} from '../../CommandContext';
import {GameObject} from '../Objects/GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class Kitchen extends RoomBase {
  objects: GameObject[];

  east = Room.Dining;

  constructor() {
    super('Kitchen', Room.Kitchen);
    this.objects = [];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the kitchen`);
  }
}
