import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class OnCouch extends RoomBase {
  objects: GameObject[];

  constructor() {
    super('Living Room (On Couch)', Room.Dining);
    this.objects = [];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the living room, only on top of the couch`);
  }
}
