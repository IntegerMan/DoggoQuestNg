import {GameObject} from '../GameObject';
import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';
import {SqueakerObject} from './SqueakerObject';

export class UnderCouchFloorObject extends GameObjectBase {
    constructor(room: Room) {
      super('floor');

      this.children = [
        new SqueakerObject(room),
      ];
    }

}
