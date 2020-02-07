import {EventEmitter, Injectable} from '@angular/core';
import {StoryEntry} from '../Model/StoryEntry';
import {StoryEntryType} from '../Model/StoryEntryType';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  public EntryAdded: EventEmitter<StoryEntry> = new EventEmitter<StoryEntry>();
  public ReadyForInput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public handlePlayerInput(text: string): void {
    // Log it if the console is available (won't be in all browsers)
    if (console && console.log) {
      console.log(`Command entered: ${text}`);
    }

    // Emit an event containing the player's command so we have a log of it in the UI
    this.EntryAdded.emit(new StoryEntry(StoryEntryType.PlayerCommand, text));

    // Add a generic response since we're not actually parsing or responding to input yet
    this.EntryAdded.emit(new StoryEntry(StoryEntryType.SystemText, 'I don\'t understand.'));

    // Tell the user interface that we're done adding in commands
    this.ReadyForInput.emit(true);
  }
}
