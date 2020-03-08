import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class Entryway extends RoomBase {
  objects: GameObject[] = [

  ];

  south = Room.Dining;
  west = Room.Office;

  constructor() {
    super('Entryway', Room.Entryway);
  }

  describe(context: CommandContext): void {
    context.addText(`You're in the entryway at the front of the house. A large door leads outside while the office is to the west and a ` +
      `hallway leads south to the dining room.`);
    context.addText(`Stairs lead up, but are blocked by a menacing gate that frequently falls on you if you get near it.`);
  }
}