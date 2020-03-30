import {CommandContext} from '../../CommandContext';
import {GameObjectBase} from '../GameObjectBase';
import {Room} from '../Room';

export class ChairObject extends GameObjectBase {
  constructor(private room: Room) {
    super('chair');

    // TODO: Differentiate by room

    this.smell = `You can't reach the window from down on the floor, but it smells vaguely like outside.`;
    this.take = `It's way too heavy to pull.`;
    this.push = 'The chair is too heavy to make rock just by pushing it. ' +
      'The only way you\'ve gotten it to move has been from jumping off of it.'; // TODO: Handle jump off
    this.smell = 'It smells old and expensive. It wouldn\'t taste too bad to chew on.';
    this.lick = 'It tastes soft and interesting, sort of like cow skin. You sort of want to chew on it.';

    this.look = this.handleLook;
    this.eat = this.handleEat;

    // TODO: Support jumping onto it / climbing it
    // TODO: Support jumping off of it
  }

  private handleLook(context: CommandContext) {
    if (context.world.isChairChewed) {
      context.addText('Your favorite rocking chair. It\'s now ripped up pretty heavily. Mommy is going to be mad when she sees this.');
    } else {
      context.addText('Mommy\'s favorite rocking chair. You like to jump up onto it and then look out the window and bark at people as they walk by.');
    }
  }

  private handleEat(context: CommandContext) {
    if (context.world.isChairChewed) {
      context.addText(`It's getting hard to rip it up any further. Find something else to destroy.`);
    } else {
      context.addText(`You grab hold of the chair's padding and rip it to shreds. Fluff flies everywhere. That was fantastic.`);
      context.increaseScore(1);
      context.world.isChairChewed = true;
    }
  }

}

