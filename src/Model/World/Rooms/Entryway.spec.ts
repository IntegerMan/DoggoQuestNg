import {EngineTest} from '../../../app/EngineTest';
import {Room} from '../Room';

describe('Entryway', () => {

  let engine: EngineTest;
  beforeEach(() => {
    engine = new EngineTest();
    engine.state.isCrateOpen = true;
    engine.state.currentRoom = Room.Entryway;
  });

  describe('navigation', () => {
    it('Should allow navigation to the office to the west', () => {
      const response = engine.getResponseState('go west');
      expect(response.state.currentRoom).toBe(Room.Office);
    });
    it('Should allow navigation to the dining room to the south', () => {
      const response = engine.getResponseState('go south');
      expect(response.state.currentRoom).toBe(Room.Dining);
    });
    it('Should not allow navigation up the stairs', () => {
      const response = engine.getResponseState('go up');
      expect(response.state.currentRoom).toBe(Room.Entryway);
      expect(response.responseText).toContain('gate');
    });
  });

  describe('room', () => {
    it('Lists objects', () => {
      const response = engine.getResponse('look');
      expect(response).toContain('Stairs');
      expect(response).toContain('office');
      expect(response).toContain('dining');
      expect(response).toContain('door');
      expect(response).toContain('gate');
    });
  });

  describe ('door', () => {
    const noun = 'door';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('opens inward');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('outside');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('not really that tasty');
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain('doesn\'t taste good');
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('take me on walks');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain('opens inward');
    });
  });

  describe ('gate', () => {
    const noun = 'gate';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('scary gate');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('scary');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('I don\'t want to get close enough');
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain('I don\'t want to get close enough');
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('scary');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain('I don\'t want to get close enough');
    });
  });

  describe ('office', () => {
    const noun = 'office';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('office');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('closer');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain(`can't`);
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain(`can't`);
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('sleep');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain(`can't`);
    });
  });

  describe ('stairs', () => {
    const noun = 'stairs';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('stairs');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('closer');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain(`can't`);
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain(`can't`);
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('sleep');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain(`can't`);
    });
  });

  describe ('kitchen', () => {
    const noun = 'kitchen';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('kitchen');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('closer');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain(`can't`);
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain(`can't`);
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('food');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain(`can't`);
    });
  });
});
