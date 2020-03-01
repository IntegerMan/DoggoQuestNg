import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class OnChair extends RoomBase {
  objects: GameObject[];

  constructor() {
    super('Office (On Chair)', Room.OnChair);
    this.objects = [];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the office, only on top of the chair`);
  }
}
