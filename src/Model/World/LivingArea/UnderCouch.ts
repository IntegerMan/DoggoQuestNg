import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {GameObjectBase} from '../GameObjectBase';
import {LivingRoomObject} from '../KitchenArea/LivingRoomObject';
import {Room} from '../Room';
import {RoomBase} from '../RoomBase';
import {CouchObject} from './CouchObject';
import {DarknessObject} from './DarknessObject';
import {UnderCouchFloorObject} from './UnderCouchFloorObject';

class UnderCouchObject extends GameObjectBase {
  constructor(room: Room) {
    super('undercouch');

    this.children = [
      new CouchObject(room),
      new UnderCouchFloorObject(room),
      new DarknessObject(room)
    ];
  }

}

export class UnderCouch extends RoomBase {
  objects: GameObject[];

  constructor() {
    super('Living Room (Under Couch)', Room.UnderCouch);
    this.objects = [
      new LivingRoomObject(Room.UnderCouch),
      new UnderCouchObject(Room.UnderCouch)
    ];
  }

  describe(context: CommandContext): void {
    context.addText(`This is my own personal den underneath the couch. Mommy doesn't like it when I go here, but it's dark and quiet ` +
      `and a good place to rest before I'm ready to go back out to the living room.`);
    context.addText(`It's hard to see anything in here. If something is here, I'll have to sniff for it.`);
  }
}
