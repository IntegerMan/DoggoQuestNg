import {GameRoom} from './GameRoom';
import {Room} from './Room';
import {Crate} from './Rooms/Crate';
import {Dining} from './Rooms/Dining';
import {EntryRoom} from './Rooms/EntryRoom';
import {Kitchen} from './Rooms/Kitchen';
import {LivingRoom} from './Rooms/LivingRoom';
import {Office} from './Rooms/Office';
import {OnChair} from './Rooms/OnChair';
import {OnCouch} from './Rooms/OnCouch';
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
    new EntryRoom(),
    new Dining(),
    new LivingRoom(),
    new OnCouch(),
    new UnderCouch(),
    new Kitchen()
  ];

  public getRoom(room: Room): GameRoom {
    return this.rooms.find(r => r.id === room);
  }
}
