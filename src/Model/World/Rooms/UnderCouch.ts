import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class UnderCouch extends RoomBase {
  objects: GameObject[];

  constructor() {
    super('Living Room (Under Couch)', Room.UnderCouch);
    this.objects = [];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the living room, only under the couch`);
  }
}
