import {StoryEntry} from '../Model/StoryEntry';
import {StoryEntryType} from '../Model/StoryEntryType';
import {GameWorld} from '../Model/World/GameWorld';
import {ParserService} from './parser.service';
import {StoryService} from './story.service';
import {VerbService} from './verb.service';
import {WorldService} from './world.service';

export interface GameResponse {
  state: GameWorld;
  responses: StoryEntry[];
  responseText: string;
}

export class EngineTest {
  private readonly service: StoryService;
  private readonly world: WorldService;

  constructor() {
    const parser = new ParserService(null);
    const verbs = new VerbService();
    this.world = new WorldService();
    this.service = new StoryService(parser, verbs, this.world);
  }

  public get state(): GameWorld {
    return this.world.state;
  }

  public getResponse(text: string): string {
    return this.getResponseState(text).responseText;
  }

  public getResponseState(text: string): GameResponse {
    const results = this.service.handlePlayerInput(text).filter(r => r.EntryType !== StoryEntryType.PlayerCommand);

    return {
      state: this.state,
      responses: results,
      responseText: results.map(r => r.Text).join('\r\n')
    };
  }
}
