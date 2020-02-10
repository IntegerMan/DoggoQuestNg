import {text, withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {StoryTextComponent} from './story-text.component';

storiesOf('StoryText', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .addDecorator(withKnobs)
  .add('StoryText', () => ({
    component: StoryTextComponent,
    props: {
      Text: text('Text', 'This is some text from the story')
    },
  }));
