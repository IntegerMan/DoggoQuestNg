import {LoggingService} from './logging.service';
import {ParserService} from './parser.service';
import {StoryService} from './story.service';
import {VerbService} from './verb.service';
import {WorldService} from './world.service';

export class EngineTestHarness {
  public static commandShouldResultInText(text: string, resultText: string): string | null {
    const logger = new LoggingService();
    const parser = new ParserService(null);
    const verbs = new VerbService();
    const world = new WorldService(logger);
    const service = new StoryService(parser, verbs, world);

    const results = service.handlePlayerInput(text);

    if (results.filter(r => r.Text && r.Text.indexOf(resultText))) {
      return null;
    }

    return results.map(r => r.Text).join('\r\n');
  }
}
