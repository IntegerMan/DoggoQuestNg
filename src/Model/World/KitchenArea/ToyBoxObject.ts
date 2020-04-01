import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';

export class ToyBoxObject extends GameObjectBase {
    constructor(room: Room) {
        super('toybox');
    }

}
