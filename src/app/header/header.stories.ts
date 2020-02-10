import {number, withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {HeaderComponent} from './header.component';

storiesOf('Header', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .addDecorator(withKnobs)
  .add('Configurable', () => ({
    component: HeaderComponent,
    props: {
      Score: number('Score', 42)
    },
  }))
  .add('Score 0', () => ({
    component: HeaderComponent,
    props: {
      Score: 0
    },
  }))
  .add('Score 10000', () => ({
    component: HeaderComponent,
    props: {
      Score: 10000
    },
  }));
