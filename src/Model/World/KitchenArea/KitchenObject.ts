import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';
import {KitchenFloorObject} from './KitchenFloorObject';

export class KitchenObject extends GameObjectBase {
  constructor(room: Room) {
        super('kitchen');

        this.children = [
            new KitchenFloorObject(),
        ];
    }
}
