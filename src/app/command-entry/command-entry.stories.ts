import {text, withKnobs} from '@storybook/addon-knobs';
import {withA11y} from '@storybook/addon-a11y';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {CommandEntryComponent} from './command-entry.component';

storiesOf('CommandEntry', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add('Blank', () => ({
    component: CommandEntryComponent,
    props: {
      Command: ''
    },
  }))
  .add('With Text', () => ({
    component: CommandEntryComponent,
    props: {
      Command: text('Command', 'User-entered text')
    },
  }));
