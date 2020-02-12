import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import { withA11y } from '@storybook/addon-a11y';

storiesOf('App', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .addDecorator(withA11y)
  .add('High Level', () => ({
    component: AppComponent,
    props: {
    },
  }));
