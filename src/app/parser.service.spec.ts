import {LoggingService} from './logging.service';
import {ParserService} from './parser.service';

describe('Parsing', () => {
  let service: ParserService;

  beforeEach(() => {
    const logger = new LoggingService();
    service = new ParserService(logger);
  });

  it('Should parse sentences without error', () => {
    const sentence = service.parse('Open the door');
    expect(sentence).not.toBeNull();
  });
});
