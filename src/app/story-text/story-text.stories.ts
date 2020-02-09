import {StoryTextComponent} from './story-text.component';

export default {
  title: 'StoryText',
  component: StoryTextComponent,
};

export const StoryTextStories = () => ({
  component: StoryTextComponent,
  props: {
    Text: 'This story illustrates sample response from the game engine. It will be shown in other components ' +
      'to give the player information on what just happened in the story.'
  },
});

StoryTextStories.story = {
  title: 'StoryText',
};
