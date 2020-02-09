import {moduleMetadata, storiesOf} from '@storybook/angular';
import {StoryEntry} from '../../Model/StoryEntry';
import {StoryEntryType} from '../../Model/StoryEntryType';
import {AppModule} from '../app.module';
import {StoryViewComponent} from './story-view.component';

storiesOf('StoryView', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .add('SampleText', () => ({
    component: StoryViewComponent,
    props: {
      Entries: [
        new StoryEntry(StoryEntryType.SystemText, 'This is a story view storyboard test'),
        new StoryEntry(StoryEntryType.PlayerCommand, 'Look around'),
        new StoryEntry(StoryEntryType.StoryNarrative, 'You can\'t see anything - it\'s a storyboard!')
      ]
    },
  }));
