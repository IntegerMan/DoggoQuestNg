import {EventEmitter, Injectable} from '@angular/core';
import {StoryEntry} from '../Model/StoryEntry';
import {StoryEntryType} from '../Model/StoryEntryType';
import {ParserService} from './parser.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  public EntryAdded: EventEmitter<StoryEntry> = new EventEmitter<StoryEntry>();
  public ReadyForInput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private parser: ParserService) { }

  public handlePlayerInput(text: string): void {
    const sentence = this.parser.parse(text);

    // Emit an event containing the player's command so we have a log of it in the UI
    this.EntryAdded.emit(new StoryEntry(StoryEntryType.PlayerCommand, text, sentence));

    const validationResult = sentence.validate();

    if (validationResult) {
      // If the player said something we couldn't figure out, show that error response and
      // include the sentence for debugging purposes
      this.EntryAdded.emit(new StoryEntry(StoryEntryType.CommandError, validationResult, sentence));
    } else {
      const verb = sentence.verb;

      // TODO: Find a verb handler for the verb

      // Add a generic response since we're not actually parsing or responding to input yet
      this.EntryAdded.emit(new StoryEntry(StoryEntryType.SystemText, `You can't ${verb} in this game.`));
    }

    // Tell the user interface that we're done adding in commands
    this.ReadyForInput.emit(true);
  }
}
