import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {ChairObject} from './ChairObject';
import {CrateObject} from './CrateObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';
import {WindowObject} from './WindowObject';

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
    context.addText(`The office is a small area where mommy likes to do some of her work. She's not here, so the only things of interest ` +
      `are your crate to the south and as a rocking chair overlooking a window.`);
    context.addText(`The rest of the house is to the east.`);
  }
}
