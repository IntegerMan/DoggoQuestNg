import {EngineTest} from '../../../app/EngineTest';
import {Room} from '../Room';

describe('Office', () => {

  let engine: EngineTest;
  beforeEach(() => {
    engine = new EngineTest();
    engine.state.isCrateOpen = true;
    engine.state.currentRoom = Room.Office;
  });

  describe('navigation', () => {
    it('Should allow navigation to the crate to the south', () => {
      const response = engine.getResponseState('go south');
      expect(response.state.currentRoom).toBe(Room.InCrate);
    });
    it('Should allow navigation to the entry to the east', () => {
      const response = engine.getResponseState('go east');
      expect(response.state.currentRoom).toBe(Room.Entryway);
    });
    it('Should allow navigation to the chair when climbing up', () => {
      const response = engine.getResponseState('go up');
      expect(response.state.currentRoom).toBe(Room.OnChair);
    });
  });

  describe('room', () => {
    it('Lists objects', () => {
      const response = engine.getResponse('look');
      expect(response).toContain('crate');
      expect(response).toContain('window');
      expect(response).toContain('chair');
    });
  });

  describe('crate', () => {
    it('Looks unpleasant', () => {
      expect(engine.getResponse('look at crate')).toContain('don\'t like it');
    });
    it('Smells better from inside', () => {
      expect(engine.getResponse('smell crate')).toContain('you need to be inside');
    });
    it(`Shouldn\'t respond to 'open crate`, () => {
      expect(engine.getResponse('open crate')).toContain('fine where it is');
    });
  });

  describe('window', () => {
    it('Can\t see from here', () => {
      expect(engine.getResponse('look window')).toContain('can\'t see');
    });
    it('Smells like outside', () => {
      expect(engine.getResponse('smell window')).toContain('outside');
    });
  });

  describe('Chair', () => {
    it('Smell suggests chew', () => {
      expect(engine.getResponse('smell chair')).toContain('chew');
    });
    it('Taste suggests chew', () => {
      expect(engine.getResponse('taste chair')).toContain('chew');
    });
    it('Looks should be descriptive', () => {
      expect(engine.getResponse('look at chair')).toContain('rocking chair');
    });
    it('Eat should increase score', () => {
      expect(engine.getResponseState('eat chair').state.score).toBe(1);
    });
    it('Take should say too heavy', () => {
      expect(engine.getResponse('get chair')).toContain('heavy');
    });
  });
});
