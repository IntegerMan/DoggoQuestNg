import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {PlaceholderObject} from '../PlaceholderObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';

export class UnderCouch extends RoomBase {
  objects: GameObject[];

  constructor() {
    super('Living Room (Under Couch)', Room.UnderCouch);
    this.objects = [
      new PlaceholderObject('squeaker'),
      new PlaceholderObject('couch'),
      new PlaceholderObject('floor'),
      new PlaceholderObject('darkness')
    ];
  }

  describe(context: CommandContext): void {
    context.addText(`This is my own personal den underneath the couch. Mommy doesn't like it when I go here, but it's dark and quiet ` +
      `and a good place to rest before I'm ready to go back out to the living room.`);
    context.addText(`It's hard to see anything in here. If something is here, I'll have to sniff for it.`);
  }
}
