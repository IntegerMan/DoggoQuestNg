import {StoryEntryType} from './StoryEntryType';
import {Sentence} from './Parsing/Sentence';
import {GameRoom} from './World/GameRoom';

export class StoryEntry {
  constructor(EntryType: StoryEntryType, Text: string, sentence?: Sentence, room?: GameRoom) {
    this.EntryType = EntryType;
    this.Text = Text;
    this.Sentence = sentence;
    this.Room = room;
  }

  public EntryType: StoryEntryType;
  public Text: string;
  public Sentence?: Sentence;
  public Room?: GameRoom;
}
