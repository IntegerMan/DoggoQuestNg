import { Injectable } from '@angular/core';
import {CommandContext} from '../Model/CommandContext';
import {GameObject} from '../Model/World/GameObject';
import {GameWorld} from '../Model/World/GameWorld';
import {LoggingService} from './logging.service';
import {RoomService} from './room.service';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  private world: GameWorld;

  constructor(private rooms: RoomService, private logger: LoggingService) {
    this.initialize();
  }

  public initialize(): GameWorld {
    this.world = new GameWorld();
    return this.state;
  }

  public get state(): GameWorld {
    return this.world;
  }

  public mapNouns(context: CommandContext): void {
    const currentRoom = this.rooms.getRoom(context.currentRoom);

    if (currentRoom) {
      this.logger.log('Mapping sentence nouns', currentRoom, context.sentence);

      for (const noun of context.sentence.rootWords.filter(w => w.isNoun)) {
        const target: GameObject = currentRoom.objects.find(o => o.name === noun.reduced);
        noun.gameObject = target;
        this.logger.log(`Mapped noun ${noun.text}`, target);
      }
    } else {
      this.logger.log(`Could not find room ${context.currentRoom}, nouns will not be mapped`);
    }
  }
}
