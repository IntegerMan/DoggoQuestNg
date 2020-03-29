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
}
