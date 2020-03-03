import {StoryEntryType} from '../Model/StoryEntryType';
import {ParserService} from './parser.service';
import {StoryService} from './story.service';
import {VerbService} from './verb.service';
import {WorldService} from './world.service';

export class EngineTest {
  public static getResponse(text: string): string {
    const parser = new ParserService(null);
    const verbs = new VerbService();
    const world = new WorldService();
    const service = new StoryService(parser, verbs, world);

    const results = service.handlePlayerInput(text).filter(r => r.EntryType !== StoryEntryType.PlayerCommand);

    return results.map(r => r.Text).join('\r\n');
  }
}
