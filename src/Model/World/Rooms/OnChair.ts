import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {ChairObject} from '../Objects/ChairObject';
import {WindowObject} from '../Objects/WindowObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';

export class OnChair extends RoomBase {
  objects: GameObject[];

  constructor() {
    super('Office (On Chair)', Room.OnChair);
    this.objects = [
      new WindowObject(this.id),
      new ChairObject(this.id)
    ];
  }

  describe(context: CommandContext): void {
    context.addText(`This is the office, only on top of the chair`);
  }
}
