import {CommandContext} from '../CommandContext';
import {GameObject} from './GameObject';

export interface GameRoom {
  name: string;
  describe(context: CommandContext): void;
  objects: GameObject[];
}
