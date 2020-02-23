import { Injectable } from '@angular/core';
import {GameWorld} from '../Model/World/GameWorld';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  private world: GameWorld;

  constructor() {
    this.initialize();
  }

  public initialize(): GameWorld {
    this.world = new GameWorld();
    return this.state;
  }

  public get state(): GameWorld {
    return this.world;
  }
}
