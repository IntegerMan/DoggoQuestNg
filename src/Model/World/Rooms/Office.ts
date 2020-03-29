import {CommandContext} from '../../CommandContext';
import {CrateObject} from '../Objects/CrateObject';
import {GameObject} from '../Objects/GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class Office extends RoomBase {
  objects: GameObject[] = [
    new CrateObject(false),
    {
      name: 'chair',
      look: context1 =>  {
        if (context1.world.isChairChewed) {
          context1.addText('Your favorite rocking chair. It\'s now ripped up pretty heavily. Mommy is going to be mad when she sees this.');
        } else {
          context1.addText('Mommy\'s favorite rocking chair. You like to jump up onto it and then look out the window and bark at people as they walk by.');
        }
      },
      take: `It's way too heavy to pull.`,
      eat: context => {
        if (context.world.isChairChewed) {
          context.addText(`It's getting hard to rip it up any further. Find something else to destroy.`);
        } else {
          context.addText(`You grab hold of the chair's padding and rip it to shreds. Fluff flies everywhere. That was fantastic.`);
          context.increaseScore(1);
          context.world.isChairChewed = true;
        }
      },
      push: 'The chair is too heavy to make rock just by pushing it. ' +
        'The only way you\'ve gotten it to move has been from jumping off of it.',
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
      look: `It's your favorite window. When you're up on the chair you can see out onto the street at bark at anything that walks by. ` +
        `You can't see much from down here, however.`
    }
  ];

  east = Room.Entryway;
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
