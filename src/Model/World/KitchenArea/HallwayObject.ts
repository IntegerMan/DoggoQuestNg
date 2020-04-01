import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';
import {FrontDoorObject} from './FrontDoorObject';
import {GateObject} from './GateObject';
import {StairsObject} from './StairsObject';

export class HallwayObject extends GameObjectBase {
  constructor(room: Room) {
        super('hallway');

        this.children = [
            new FrontDoorObject(),
            new StairsObject(),
            new GateObject(),
        ];
    }

}
