import {CommandContext} from '../CommandContext';
import {GameObject} from './GameObject';
import {Room} from './Room';

export interface GameRoom {
  displayName: string;
  id: Room;
  objects: GameObject[];
  describe(context: CommandContext): void;
}
