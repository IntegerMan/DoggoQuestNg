import {GameObject} from '../GameObject';
import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';

export class CouchObject extends GameObjectBase {
    constructor(room: Room) {
      super('couch');
    }

}
