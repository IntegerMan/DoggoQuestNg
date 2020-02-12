import {text, withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {PlayerCommandComponent} from './player-command.component';
import { withA11y } from '@storybook/addon-a11y';

storiesOf('PlayerCommand', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add('PlayerCommand', () => ({
    component: PlayerCommandComponent,
    props: {
      Text: text('Text', 'Howl at the moon')
    },
  }));
