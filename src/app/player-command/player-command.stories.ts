import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {PlayerCommandComponent} from './player-command.component';

storiesOf('PlayerCommand', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .add('PlayerCommand', () => ({
    component: PlayerCommandComponent,
    props: {
      Text: 'Howl at the moon'
    },
  }));
