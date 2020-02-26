import {CrateRoom} from './Rooms/CrateRoom';
import {GameRoom} from './GameRoom';
import {Room} from './Room';

export class GameWorld {
  public score = 0;
  constructor() {
  }

  isCrateOpen = false;

  public rooms: GameRoom[] = [
    new CrateRoom()
  ];

  public getRoom(room: Room): GameRoom {
    return this.rooms.find(r => r.id === room);
  }
}
