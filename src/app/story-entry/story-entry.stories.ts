import {moduleMetadata, storiesOf} from '@storybook/angular';
import {StoryEntry} from '../../Model/StoryEntry';
import {StoryEntryType} from '../../Model/StoryEntryType';
import {AppModule} from '../app.module';
import {StoryEntryComponent} from './story-entry.component';

storiesOf('StoryEntry', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AppModule
      ],
    }))
  .add('PlayerCommand', () => ({
    component: StoryEntryComponent,
    props: {
      Entry: new StoryEntry(StoryEntryType.PlayerCommand, 'This is a player command')
    },
  }))
  .add('StoryNarrative', () => ({
    component: StoryEntryComponent,
    props: {
      Entry: new StoryEntry(StoryEntryType.StoryNarrative, 'This is story narrative')
    },
  }));
