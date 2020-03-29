import {CommandContext} from '../../CommandContext';
import {GameObject} from '../Objects/GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class Dining extends RoomBase {
  objects: GameObject[];

  west = Room.Kitchen;
  east = Room.Living;
  north = Room.Entryway;

  constructor() {
    super('Dining Room', Room.Dining);
    this.objects = [];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the dining room`);
  }
}
