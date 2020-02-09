import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {CommandEntryComponent} from './command-entry.component';

storiesOf('CommandEntry', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .add('Blank', () => ({
    component: CommandEntryComponent,
    props: {
      Command: ''
    },
  }))
  .add('With Text', () => ({
    component: CommandEntryComponent,
    props: {
      Command: 'This is some player-entered text'
    },
  }));
