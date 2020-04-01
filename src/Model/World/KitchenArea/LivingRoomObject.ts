import {GameObjectBase} from '../GameObjectBase';
import {CouchObject} from '../LivingArea/CouchObject';
import {Room} from '../Room';
import {TableObject} from './TableObject';
import {TelevisionObject} from './TelevisionObject';
import {ToyBoxObject} from './ToyBoxObject';

export class LivingRoomObject extends GameObjectBase {
    constructor(room: Room) {
        super('livingroom');

        this.children = [
          new CouchObject(room),
          new TableObject(room),
          new TelevisionObject(room),
          new ToyBoxObject(room),
        ];
    }

}
