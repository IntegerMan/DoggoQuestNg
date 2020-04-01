import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';

export class BowlObject extends GameObjectBase {
    constructor(room: Room) {
        super('bowl');
    }
}
