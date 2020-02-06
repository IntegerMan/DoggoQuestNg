import {StoryEntryType} from './StoryEntryType';

export class StoryEntry {
  constructor(EntryType: StoryEntryType, Text: string) {
    this.EntryType = EntryType;
    this.Text = Text;
  }

  public EntryType: StoryEntryType;
  public Text: string;
}
