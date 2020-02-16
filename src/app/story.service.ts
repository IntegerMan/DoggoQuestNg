import {EventEmitter, Injectable} from '@angular/core';
import {Sentence} from '../Model/Sentence';
import {StoryEntry} from '../Model/StoryEntry';
import {StoryEntryType} from '../Model/StoryEntryType';
import {ParserService} from './parser.service';
import {VerbService} from './verb.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  public EntriesAdded: EventEmitter<StoryEntry[]> = new EventEmitter<StoryEntry[]>();

  constructor(private parser: ParserService, private verbs: VerbService) {
  }

  public get initialEntries(): StoryEntry[] {
    return [new StoryEntry(StoryEntryType.SystemText,
      'Welcome to Doggo Quest!'),
            new StoryEntry(StoryEntryType.SystemText,
      'Doggo Quest is an Interactive Fiction game created by Matt Eland (@IntegerMan)'),
            new StoryEntry(StoryEntryType.SystemText,
      'This game is implemented in Angular / TypeScript using Angular Material for styling with Compromise-NLP for text parsing.')];
  }

  public handlePlayerInput(text: string): void {
    const entries: StoryEntry[] = [];
    const sentence = this.parser.parse(text);

    // Emit an event containing the player's command so we have a log of it in the UI
    entries.push(new StoryEntry(StoryEntryType.PlayerCommand, text, sentence));

    const validationResult = sentence.validate();

    if (validationResult) {
      // If the player said something we couldn't figure out, show that error response and
      // include the sentence for debugging purposes
      entries.push(new StoryEntry(StoryEntryType.CommandError, validationResult, sentence));
    } else {
      this.handleCommand(sentence, entries);
    }

    // Tell the user interface that we're done adding in commands
    this.EntriesAdded.emit(entries);
  }

  private handleCommand(sentence: Sentence, entries: StoryEntry[]): void {
    // Find a verb handler for the verb
    const handler = this.verbs.getHandler(sentence.verb);

    if (handler) {
      // Invoke the verb handler
      handler(sentence, entries);
    } else {
      // Add a generic response saying that the verb is not supported
      entries.push(new StoryEntry(StoryEntryType.SystemText, `You can't ${sentence.verb} in this game.`));
    }
  }
}
