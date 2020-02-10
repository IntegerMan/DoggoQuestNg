import {select, text, withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {StoryEntry} from '../../Model/StoryEntry';
import {StoryEntryType} from '../../Model/StoryEntryType';
import {AppModule} from '../app.module';
import {StoryEntryComponent} from './story-entry.component';

storiesOf('StoryEntry', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .addDecorator(withKnobs)
  .add('Configurable', () => ({
    component: StoryEntryComponent,
    props: {
      Entry: new StoryEntry(select<StoryEntryType>('Type',
        {Error: StoryEntryType.CommandError,
                System: StoryEntryType.SystemText,
                Narrative: StoryEntryType.StoryNarrative,
                Command: StoryEntryType.PlayerCommand},
        StoryEntryType.SystemText),
        text('Text', 'This is the text of the entry'))
    },
  }))
  .add('PlayerCommand', () => ({
    component: StoryEntryComponent,
    props: {
      Entry: new StoryEntry(StoryEntryType.PlayerCommand, 'This is a player command')
    },
  }))
  .add('SystemText', () => ({
    component: StoryEntryComponent,
    props: {
      Entry: new StoryEntry(StoryEntryType.SystemText, 'This is some System Text')
    },
  }))
  .add('Error', () => ({
    component: StoryEntryComponent,
    props: {
      Entry: new StoryEntry(StoryEntryType.CommandError, 'This is an error or warning message')
    },
  }))
  .add('StoryNarrative', () => ({
    component: StoryEntryComponent,
    props: {
      Entry: new StoryEntry(StoryEntryType.StoryNarrative, 'This is story narrative')
    },
  }));
