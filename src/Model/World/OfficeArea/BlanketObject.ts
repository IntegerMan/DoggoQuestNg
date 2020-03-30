import {GameObjectBase} from '../GameObjectBase';

export class BlanketObject extends GameObjectBase {
  constructor() {
    super('blanket');

    this.smell = 'It smells like you!';
    this.lick = 'It tastes smooth, cold, and boring.';
    this.push = 'You rearrange the blanket so that it is nice and comfortable.';
    this.look = 'The blanket is soft and snuggly. You like it.';
    this.eat = 'You would never want to hurt your precious blanket!';
    this.take = 'You really should leave it in your crate. The crate is uncomfortable to lay down in without a nice soft blanket';
    this.lick = 'It\'s not that interesting to taste. You lick it sometimes while you sleep in your crate, but it just tastes like blanket.';

    // TODO: Lay down on blanket
  }
}
