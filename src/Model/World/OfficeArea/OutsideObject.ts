import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';

export class OutsideObject extends GameObjectBase {
    constructor(room: Room) {
        super('outside');

    }
}
