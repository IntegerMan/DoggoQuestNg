import {boolean, withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {FooterComponent} from './footer.component';

storiesOf('Footer', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .addDecorator(withKnobs)
  .add('Configurable', () => ({
    component: FooterComponent,
    props: {
      GameOver: boolean('GameOver', false)
    },
  }))
  .add('In Game', () => ({
    component: FooterComponent,
    props: {
      GameOver: false
    },
  }))
  .add('Game Over', () => ({
    component: FooterComponent,
    props: {
      GameOver: true
    },
  }));
