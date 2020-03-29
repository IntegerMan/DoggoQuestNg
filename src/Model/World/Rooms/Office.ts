import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {ChairObject} from '../Objects/ChairObject';
import {CrateObject} from '../Objects/CrateObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';
import {WindowObject} from '../Objects/WindowObject';

export class Office extends RoomBase {
  objects: GameObject[] = [
    new CrateObject(false),
    new WindowObject(this.id),
    new ChairObject(this.id)
  ];

  east = Room.Entryway;
  south = Room.InCrate;
  up = Room.OnChair;
  in = Room.InCrate;

  constructor() {
    super('Office', Room.Office);
  }

  describe(context: CommandContext): void {
    context.addText(`The office contains your crate to the south as well as a rocking chair overlooking a window to the outside.`);
    context.addText(`The rest of the house is to the east.`);
  }
}
