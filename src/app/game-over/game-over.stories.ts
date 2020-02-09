import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {GameOverComponent} from './game-over.component';

storiesOf('GameOver', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .add('Game Over', () => ({
    component: GameOverComponent,
    props: {
    },
  }));
