import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';
import {OutsideObject} from './OutsideObject';

export class WindowObject extends GameObjectBase {
    constructor(private room: Room) {
        super('window');

        this.children = [
          new OutsideObject(room)
        ];

        switch (this.room) {
          case Room.Office:
            const cantReachFloor = `You can't reach the window from down on the floor.`;
            this.lick = cantReachFloor;
            this.push = cantReachFloor;
            this.eat = cantReachFloor;
            this.take = cantReachFloor;
            this.smell = `You can't reach the window from down on the floor, but it smells vaguely like outside.`;
            this.look = `It's your favorite window. When you're up on the chair you can see out onto the street at bark at anything that ` +
              `walks by. You can't see much from down here, however.`;
        }
    }
}
