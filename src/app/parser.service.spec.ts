import {ParserService} from './parser.service';

describe('Parsing', () => {
  let service: ParserService;

  beforeEach(() => {
    service = new ParserService();
  });

  it('Should parse sentences without error', () => {
    const sentence = service.parse('Open the door');
    expect(sentence).not.toBeNull();
  });
});
