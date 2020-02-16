import {Injectable} from '@angular/core';
import {Room} from '../Model/Room';
import {StoryEntry} from '../Model/StoryEntry';
import {StoryEntryType} from '../Model/StoryEntryType';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  public describe(room: Room, entries: StoryEntry[], fullDescribe: boolean): void {
    entries.push(new StoryEntry(StoryEntryType.RoomName, this.getNameOfRoom(room)));

    switch (room) {
      case Room.InCrate:
        entries.push(this.text(`You're in your crate yet again. It's a small crate large enough for you to rest comfortably, but not move around in.`));
        entries.push(this.text('There is a blanket on the floor and a door to the crate in front of you.'));
        entries.push(this.text('You do not like it here.'));
        break;
      default:
        entries.push(new StoryEntry(StoryEntryType.CommandError, 'No description exists for this room'));
        break;
    }
  }

  private text(message: string): StoryEntry {
    return new StoryEntry(StoryEntryType.StoryNarrative, message);
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
