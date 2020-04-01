import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';

export class SqueakerObject extends GameObjectBase {
    constructor(room: Room) {
        super('squeaker');
    }

}
