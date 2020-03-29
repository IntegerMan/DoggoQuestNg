import {CommandContext} from '../CommandContext';
import {GameObject} from './GameObject';
import {Room} from './Room';

export interface GameRoom {
  displayName: string;
  id: Room;
  objects: GameObject[];
  north?: Room;
  south?: Room;
  west?: Room;
  east?: Room;
  up?: Room;
  down?: Room;
  in?: Room;
  out?: Room;

  describe(context: CommandContext): void;
}
