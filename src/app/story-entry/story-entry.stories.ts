import {StoryEntry} from '../../Model/StoryEntry';
import {StoryEntryType} from '../../Model/StoryEntryType';
import {StoryEntryComponent} from './story-entry.component';

export default {
  title: 'StoryEntry',
  component: StoryEntryComponent,
};

export const StoryEntryStories = () => ({
  component: StoryEntryComponent,
  props: {
    Entry: new StoryEntry(StoryEntryType.PlayerCommand, 'This is a player command')
  },
});

StoryEntryStories.story = {
  title: 'StoryEntry',
};
