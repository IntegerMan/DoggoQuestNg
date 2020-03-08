import {GameRoom} from './GameRoom';
import {Room} from './Room';
import {Crate} from './Rooms/Crate';
import {Dining} from './Rooms/Dining';
import {Entryway} from './Rooms/Entryway';
import {Kitchen} from './Rooms/Kitchen';
import {LivingRoom} from './Rooms/LivingRoom';
import {Office} from './Rooms/Office';
import {OnChair} from './Rooms/OnChair';
import {UnderCouch} from './Rooms/UnderCouch';

export class GameWorld {
  public score = 0;
  public currentRoom: Room = Room.InCrate;
  public isChairChewed: boolean;

  constructor() {
  }

  isCrateOpen = false;

  public rooms: GameRoom[] = [
    new Office(),
    new OnChair(),
    new Crate(),
    new Entryway(),
    new Dining(),
    new LivingRoom(),
    new UnderCouch(),
    new Kitchen()
  ];

  public getRoom(room: Room): GameRoom {
    return this.rooms.find(r => r.id === room);
  }
}
