import {EventEmitter, Injectable} from '@angular/core';
import {CommandContext} from '../Model/CommandContext';
import {Room} from '../Model/Room';
import {StoryEntry} from '../Model/StoryEntry';
import {StoryEntryType} from '../Model/StoryEntryType';
import {ParserService} from './parser.service';
import {RoomService} from './room.service';
import {VerbService} from './verb.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  public EntriesAdded: EventEmitter<StoryEntry[]> = new EventEmitter<StoryEntry[]>();

  constructor(private parser: ParserService, private verbs: VerbService, private rooms: RoomService) {
  }

  public get initialEntries(): StoryEntry[] {
    const entries = [
      new StoryEntry(StoryEntryType.SystemText, 'Welcome to Doggo Quest!'),
      new StoryEntry(StoryEntryType.SystemText,
        'Doggo Quest is an Interactive Fiction game created by Matt Eland (@IntegerMan)'),
      new StoryEntry(StoryEntryType.SystemText,
        'This game is implemented in Angular / TypeScript using Angular Material for styling with Compromise-NLP for text parsing.'),
      new StoryEntry(StoryEntryType.Divider, '')
    ];

    this.rooms.describe(Room.InCrate, entries, true);

    return entries;
  }

  public handlePlayerInput(text: string): void {
    const entries: StoryEntry[] = [];
    const sentence = this.parser.parse(text);
    const context = new CommandContext(entries, sentence, this.rooms);

    // Add an event containing the player's command so we have a log of it in the UI
    context.addPlayerCommand();

    const validationResult = sentence.validate();

    if (validationResult) {
      // If the player said something we couldn't figure out, show that error response
      context.addError(validationResult);
    } else {
      this.handleCommand(context);
    }

    // Tell the user interface that we're done adding in commands
    this.EntriesAdded.emit(entries);
  }

  private handleCommand(context: CommandContext): void {
    // Find a verb handler for the verb
    const handler = this.verbs.getHandler(context.sentence.verb);

    if (handler) {
      // Invoke the verb handler
      handler(context);
    } else {
      // Add a generic response saying that the verb is not supported
      context.addSystem( `You can't ${context.sentence.verb} in this game.`);
    }
  }
}
