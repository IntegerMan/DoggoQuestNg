import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';
import {BackDoorObject} from './BackDoorObject';
import {DiningChairObject} from './DiningChairObject';
import {TableObject} from './TableObject';
import {BowlObject} from './BowlObject';

export class DiningObject extends GameObjectBase {
    constructor(room: Room) {
        super('dining');

        this.children = [
            new TableObject(room),
            new DiningChairObject(room),
            new BackDoorObject(room),
            new BowlObject(room),
        ];
    }

}
