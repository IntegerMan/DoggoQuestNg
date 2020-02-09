import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {FooterComponent} from './footer.component';

storiesOf('Footer', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
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
