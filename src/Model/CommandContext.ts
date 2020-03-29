import {Word} from './Parsing/Word';
import {GameRoom} from './World/GameRoom';
import {GameWorld} from './World/GameWorld';
import {Room} from './World/Room';
import {Sentence} from './Parsing/Sentence';
import {StoryEntry} from './StoryEntry';
import {StoryEntryType} from './StoryEntryType';

export class CommandContext {

  constructor(private entries: StoryEntry[], public sentence: Sentence, public world: GameWorld) {

  }

  public get currentRoom(): Room {
    return this.world.currentRoom;
  }

  public get currentRoomObject(): GameRoom {
    return this.world.getRoom(this.world.currentRoom);
  }

  public get currentRoomName(): string {
    return this.currentRoomObject.displayName;
  }

  public describeCurrentRoom(isFullDescribe: boolean): void {
    const gameRoom = this.world.getRoom(this.world.currentRoom);

    this.addRoomName(gameRoom.displayName);

    if (isFullDescribe) {
      if (gameRoom) {
        gameRoom.describe(this);
      } else {
        this.addError(`No description exists for room ${this.world.currentRoom}`);
      }
    }
  }

  public changeRoom(newRoom: Room, directionName: string): void {
    const currentRoom: GameRoom = this.world.getRoom(this.currentRoom);

    // Check to see if we have something like canGoNorth and execute it if relevant
    const tryGoVar = `tryGo` + directionName[0].toUpperCase() + directionName.slice(1);
    let tryGo: (context: CommandContext) => boolean | undefined = currentRoom[tryGoVar];
    if (tryGo) {
      tryGo = tryGo.bind(currentRoom);
      if (tryGo(this)) {
        return;
      }
    }

    this.addText(`You go ${directionName}`);
    this.world.currentRoom = newRoom;
    this.describeCurrentRoom(true); // TODO: Should only be true on first visit
  }

  public checkVerb(expectedVerb: string): void {
    if (this.sentence.verb !== expectedVerb) {
      this.addSystem( `[Handling as '${expectedVerb}' instead of '${this.sentence.verb}']`);
    }
  }

  public addPlayerCommand(): void {
    this.entries.push(new StoryEntry(StoryEntryType.PlayerCommand, this.sentence.text, this.sentence, this.currentRoomObject));
  }

  public addText(message: string): void {
    this.entries.push(new StoryEntry(StoryEntryType.StoryNarrative, message, this.sentence, this.currentRoomObject));
  }

  public addRoomName(message: string): void {
    this.entries.push(new StoryEntry(StoryEntryType.RoomName, message, this.sentence, this.currentRoomObject));
  }

  public addError(message: string): void {
    this.entries.push(new StoryEntry(StoryEntryType.CommandError, message, this.sentence, this.currentRoomObject));
  }

  public addSystem(message: string): void {
    this.entries.push(new StoryEntry(StoryEntryType.SystemText, message, this.sentence, this.currentRoomObject));
  }

  public addDontSee(target: Word): void {
    this.entries.push(new StoryEntry(StoryEntryType.CommandError,
      `You don't see a ${target.reduced} here.`,
      this.sentence,
      this.currentRoomObject));
  }

  public increaseScore(amount: number): void {
    this.addSystem(`Your score has gone up by ${amount}`);
    this.world.score += amount;
  }

  public addLocalObjects(): void {
    this.entries.push(new StoryEntry(StoryEntryType.ObjectList, 'Objects in this room', this.sentence, this.currentRoomObject));
  }
}
