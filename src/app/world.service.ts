import { Injectable } from '@angular/core';
import {CommandContext} from '../Model/CommandContext';
import {GameObject} from '../Model/World/GameObject';
import {GameWorld} from '../Model/World/GameWorld';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  private world: GameWorld;

  constructor(private logger?: LoggingService) {
    this.initialize();
  }

  public initialize(): GameWorld {
    this.world = new GameWorld();
    return this.state;
  }

  public get state(): GameWorld {
    return this.world;
  }

  private findMatchForNoun(objects: GameObject[], reduced: string): GameObject | null {
    for (const obj of objects) {
      // If this object is a direct match, use it
      if (obj.matches(reduced)) {
        return obj;
      }

      // If it has children, we'll need to recursively check them
      if (obj.children) {
        const childResult = this.findMatchForNoun(obj.children, reduced);
        if (childResult) {
          return childResult;
        }
      }
    }

    // Okay, no match. Let's return null to indicate no object mapped
    return null;
  }


  public mapNouns(context: CommandContext): void {
    const currentRoom = this.state.getRoom(context.currentRoom);

    if (!currentRoom) {
      if (this.logger) {
        this.logger.log(`Could not find room ${context.currentRoom}, nouns will not be mapped`);
      }
      return;
    }

    if (this.logger) {
      this.logger.log('Mapping sentence nouns', currentRoom, context.sentence);
    }

    for (const noun of context.sentence.rootWords.filter(w => w.isNoun)) {
      const target: GameObject = this.findMatchForNoun(currentRoom.objects, noun.reduced);
      noun.gameObject = target;
      if (this.logger) {
        this.logger.log(`Mapped noun ${noun.text}`, target);
      }
      noun.addTag('Mapped');
    }

    if (this.logger) {
      this.logger.log('Mapping sentence directions', currentRoom, context.sentence);
    }

    for (const dir of context.sentence.rootWords.filter(w => w.isDirection)) {
      dir.room = currentRoom[dir.reduced];
      if (this.logger) {
        this.logger.log(`Mapped direction ${dir.text} to ${dir.room}`);
      }
      dir.addTag('Mapped');
    }
  }
}
