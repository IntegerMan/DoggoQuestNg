import {text, withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {PlayerCommandComponent} from './player-command.component';

storiesOf('PlayerCommand', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .addDecorator(withKnobs)
  .add('PlayerCommand', () => ({
    component: PlayerCommandComponent,
    props: {
      Text: text('Text', 'Howl at the moon')
    },
  }));
