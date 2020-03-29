import {CommandContext} from '../CommandContext';
import {GameObject} from './GameObject';
import {GameRoom} from './GameRoom';
import {Room} from './Room';

export abstract class RoomBase implements GameRoom {

    protected constructor(public displayName: string, public id: Room) {
    }

    abstract objects: GameObject[];

    abstract describe(context: CommandContext): void;
}
