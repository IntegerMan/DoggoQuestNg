import {StoryEntryType} from './StoryEntryType';
import {Sentence} from './Sentence';

export class StoryEntry {
  constructor(EntryType: StoryEntryType, Text: string, sentence?: Sentence) {
    this.EntryType = EntryType;
    this.Text = Text;
    this.Sentence = sentence;
  }

  public EntryType: StoryEntryType;
  public Text: string;
  public Sentence?: Sentence;
}
