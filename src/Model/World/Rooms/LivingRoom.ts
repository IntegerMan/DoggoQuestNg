import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';

export class LivingRoom extends RoomBase {
  objects: GameObject[];

  west = Room.Dining;
  in = Room.UnderCouch;
  under = Room.UnderCouch;

  constructor() {
    super('Living Room', Room.Living);
    this.objects = [];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the living room`);
  }
}
