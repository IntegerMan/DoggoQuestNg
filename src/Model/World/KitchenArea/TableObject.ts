import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';

export class TableObject extends GameObjectBase {
    constructor(room: Room) {
        super('table');
    }
}
