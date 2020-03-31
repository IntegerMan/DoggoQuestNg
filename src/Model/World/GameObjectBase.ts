import {GameObject, objectResponse} from './GameObject';

export abstract class GameObjectBase implements GameObject {

    protected constructor(name: string) {
        this.name = name;
    }

    name: objectResponse;
    look: objectResponse;
    push: objectResponse;
    smell: objectResponse;
    take: objectResponse;
    eat: objectResponse;
    lick: objectResponse;
    think: objectResponse;
    children: GameObject[] = [];

  matches(reduced: string): boolean {
    return reduced === this.name; // TODO: Check aliases as well
  }
}
