import {Injectable} from '@angular/core';
import {CommandContext} from '../Model/CommandContext';
import {GameRoom} from '../Model/World/GameRoom';
import {Room} from '../Model/World/Room';
import {StoryEntry} from '../Model/StoryEntry';
import {StoryEntryType} from '../Model/StoryEntryType';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  private crateRoom: GameRoom = {
    name: 'crate',
    describe(context: CommandContext): void {
      context.addText(`You're in your crate yet again. It's a small crate large enough for you to rest comfortably, but not move around in.`);
      context.addText('There is a blanket on the floor and a door to the crate in front of you.');
      context.addText('You do not like it here.');
    },
    objects: [
      {
        name: 'Door',
        description: 'It is just a metal door to the crate.',
        smell: 'It smells like metal.',
        taste: 'It tastes smooth, cold, and boring.'
      },
      {
        name: 'Blanket',
        description: 'The blanket is soft and snuggly. You like it.',
        smell: 'It smells like you!',
        taste: 'It\'s not that interesting to taste. You lick it sometimes while you sleep in your crate, but it just tastes like blanket.'
      }
    ]
  };

  public describe(room: Room, context: CommandContext, fullDescribe: boolean): void {
    context.addRoomName(this.getNameOfRoom(room));

    const gameRoom = this.getRoom(room);

    if (gameRoom) {
      gameRoom.describe(context);
    } else {
      context.addError('No description exists for room ' + room);
    }
  }

  private text(message: string): StoryEntry {
    return new StoryEntry(StoryEntryType.StoryNarrative, message);
  }

  public getRoom(room: Room): GameRoom {
    switch (room) {
      case Room.InCrate:
        return this.crateRoom;
      default:
        return undefined;
    }
  }

  private getNameOfRoom(room: Room): string {
    switch (room) {
      case Room.InCrate:
        return 'Office (In Crate)';
      case Room.Office:
        return 'Office';
      case Room.OnChair:
        return 'Office (On Chair)';
      case Room.Entry:
        return 'Entryway';
      case Room.Dining:
        return 'Dining Room';
      case Room.Kitchen:
        return 'Kitchen';
      case Room.Living:
        return 'Living Room';
      case Room.UnderCouch:
        return 'Living Room (Under Couch)';
      case Room.OnCouch:
        return 'Living Room (On Couch)';
      default:
        return 'No description exists for ' + room;
    }
  }

}
