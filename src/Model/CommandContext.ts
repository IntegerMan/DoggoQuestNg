import {Word} from './Parsing/Word';
import {GameWorld} from './World/GameWorld';
import {Room} from './World/Room';
import {Sentence} from './Parsing/Sentence';
import {StoryEntry} from './StoryEntry';
import {StoryEntryType} from './StoryEntryType';

export class CommandContext {

  public currentRoom: Room = Room.InCrate;

  constructor(private entries: StoryEntry[], public sentence: Sentence, public world: GameWorld) {

  }

  public describeCurrentRoom(isFullDescribe: boolean): void {
    const gameRoom = this.world.getRoom(this.currentRoom);

    this.addRoomName(gameRoom.displayName);

    if (gameRoom) {
      gameRoom.describe(this);
    } else {
      this.addError('No description exists for room ' + this.currentRoom);
    }
  }

  public checkVerb(expectedVerb: string): void {
    if (this.sentence.verb !== expectedVerb) {
      this.addSystem( `[Handling as '${expectedVerb}' instead of '${this.sentence.verb}']`);
    }
  }

  public addPlayerCommand(): void {
    this.entries.push(new StoryEntry(StoryEntryType.PlayerCommand, this.sentence.text, this.sentence));
  }

  public addText(message: string): void {
    this.entries.push(new StoryEntry(StoryEntryType.StoryNarrative, message, this.sentence));
  }

  public addRoomName(message: string): void {
    this.entries.push(new StoryEntry(StoryEntryType.RoomName, message, this.sentence));
  }

  public addError(message: string): void {
    this.entries.push(new StoryEntry(StoryEntryType.CommandError, message, this.sentence));
  }

  public addSystem(message: string): void {
    this.entries.push(new StoryEntry(StoryEntryType.SystemText, message, this.sentence));
  }

  public addDontSee(target: Word): void {
    this.entries.push(new StoryEntry(StoryEntryType.CommandError, `You don't see a ${target.reduced} here.`, this.sentence));
  }
}
