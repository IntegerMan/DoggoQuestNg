import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {HeaderComponent} from './header.component';

storiesOf('Header', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .add('Score 0', () => ({
    component: HeaderComponent,
    props: {
      Score: 0
    },
  }))
  .add('Score 42', () => ({
    component: HeaderComponent,
    props: {
      Score: 42
    },
  }))
  .add('Score 10000', () => ({
    component: HeaderComponent,
    props: {
      Score: 10000
    },
  }));
