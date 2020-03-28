import {EngineTest} from '../../../app/EngineTest';
import {Room} from '../Room';

describe('Living Room', () => {

  let engine: EngineTest;
  beforeEach(() => {
    engine = new EngineTest();
    engine.state.isCrateOpen = true;
    engine.state.currentRoom = Room.Living;
  });

  describe('navigation', () => {
    it('Should allow navigation to the dining room to the west', () => {
      const response = engine.getResponseState('go west');
      expect(response.state.currentRoom).toBe(Room.Dining);
    });
    it('Should allow navigation to under the couch', () => {
      const response = engine.getResponseState('go under couch');
      expect(response.state.currentRoom).toBe(Room.UnderCouch);
    });
  });

  describe('room', () => {
    it('Lists objects', () => {
      const response = engine.getResponse('look');
      expect(response).toContain('couch');
      expect(response).toContain('TV');
      expect(response).toContain('ball');
      expect(response).toContain('squeaker');
      expect(response).toContain('bed');
      expect(response).toContain('dining');
    });
  });

  describe ('couch', () => {
    const noun = 'couch';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('soft');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('Mommy and Daddy');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('yucky');
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain('taste');
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('Daddy');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain('under');
    });
  });

  describe ('ball', () => {
    const noun = 'ball';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('hockey');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('plastic');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('plastic');
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain('touh');
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('hockey');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain('roll');
    });
  });

  describe ('dining room', () => {
    const noun = 'dining room';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain(noun);
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
      expect(engine.getResponse(`think about ${noun}`)).toContain('bowl');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain(`can't`);
    });
  });
});
