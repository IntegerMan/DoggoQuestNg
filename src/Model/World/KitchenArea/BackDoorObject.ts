import {GameObjectBase} from '../GameObjectBase';
import {WindowObject} from '../OfficeArea/WindowObject';
import {Room} from '../Room';

export class BackDoorObject extends GameObjectBase {
    constructor(room: Room) {
        super('door');
        this.children = [
            new WindowObject(room),
        ];
    }

}
