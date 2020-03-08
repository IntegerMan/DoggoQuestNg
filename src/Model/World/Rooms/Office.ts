import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class Office extends RoomBase {
  objects: GameObject[] = [
    {
      name: 'crate',
      look: `It's your crate. You don't like it, but you can go back in it if you want by going south.`,
      eat: 'Yuck. No thank you.',
      push: `The crate is fine where it is and you don't want to shut the door to it either.`,
      smell: `To really smell the crate, you need to be inside it.`,
      take: `It's too big to pull along with you. Besides, it's fine where it is.`,
      lick: `You'd have to do that from inside the crate.`
    },
    {
      name: 'chair',
      look: 'Your favorite rocking chair. You like to jump up onto it and then look out the window and bark at people as they walk by.',
      take: `It's way too heavy to pull.`,
      eat: context => {
        // TODO: Break the chair if unbroken
      },
      push: 'The chair is too heavy to make rock just by pushing it. The only way you\'ve gotten it to move has been from jumping off of it.',
      smell: 'It smells old and expensive. It wouldn\'t taste too bad to chew on.',
      lick: 'It tastes soft and interesting, sort of like cow skin. You sort of want to chew on it.'
      // TODO: Support jumping onto it / climbing it
    },
    {
      name: 'window',
      lick: `You can't reach the window from down on the floor.`,
      push: `You can't reach the window from down on the floor.`,
      eat: `You can't reach the window from down on the floor.`,
      smell: `You can't reach the window from down on the floor, but it smells vaguely like outside.`,
      take: `You can't reach the window from down on the floor.`,
      look: `It's your favorite window. When you're up on the chair you can see out onto the street at bark at anything that walks by. You can't see much from down here, however.`
    }
  ];

  east = Room.Entry;
  south = Room.InCrate;
  up = Room.OnChair;
  in = Room.InCrate;

  constructor() {
    super('Office', Room.Office);
  }

  describe(context: CommandContext): void {
    context.addText(`The office contains your crate to the south as well as a rocking chair overlooking a window to the outside.`);
    context.addText(`The rest of the house is to the east.`);
  }
}
