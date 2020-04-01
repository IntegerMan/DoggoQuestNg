import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';
import {CrumbObject} from './CrumbObject';
import {TrashcanObject} from './TrashcanObject';
import {BowlObject} from './BowlObject';

export class KitchenFloorObject extends GameObjectBase {
    constructor() {
        super('floor');

        this.children = [
            new CrumbObject(),
            new TrashcanObject(),
            new BowlObject(Room.Kitchen),
        ];
    }
}
