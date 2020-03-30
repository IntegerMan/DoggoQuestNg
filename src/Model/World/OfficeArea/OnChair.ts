import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {ChairObject} from './ChairObject';
import {WindowObject} from './WindowObject';
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
    context.addText(`You're in the office on top of your favorite chair. From here you have a good vantage point to look out the window ` +
      `and can still see the rest of the office below you.`);
  }
}
