import {boolean, withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {FooterComponent} from './footer.component';
import { withA11y } from '@storybook/addon-a11y';

storiesOf('Footer', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
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
