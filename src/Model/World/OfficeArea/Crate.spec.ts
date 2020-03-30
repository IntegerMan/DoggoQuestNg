import {EngineTest} from '../../../app/EngineTest';
import {Room} from '../Room';

describe('Crate', () => {

  let engine: EngineTest;
  beforeEach(() => {
    engine = new EngineTest();
  });

  describe('navigation', () => {
    it('Should block navigation to the north when door is closed', () => {
      const response = engine.getResponseState('go north');
      expect(response.state.isCrateOpen).toBe(false);
      expect(response.state.currentRoom).toBe(Room.InCrate);
    });
    it('Should allow navigation to the north when door is open', () => {
      engine.state.isCrateOpen = true;
      const response = engine.getResponseState('go north');
      expect(response.state.currentRoom).toBe(Room.Office);
    });
  });

  describe('room', () => {
    it('Lists objects', () => {
      const response = engine.getResponse('look');
      expect(response).toContain('blanket');
      expect(response).toContain('door');
    });
  });

  describe('crate', () => {
    it('Looks unpleasant', () => {
      expect(engine.getResponse('look at crate')).toContain('You do not like it');
    });
    it('Smells like you', () => {
      expect(engine.getResponse('smell crate')).toContain('smells like you');
    });
    it(`responds to 'open crate`, () => {
      expect(engine.getResponse('open crate')).toContain('try pushing the door');
    });
  });

  describe ('door', () => {
    it(`opens with 'open door`, () => {
      const response = engine.getResponseState('open door');
      expect(response.state.isCrateOpen).toBe(true);
    });
    it(`opens with 'push door`, () => {
      const response = engine.getResponseState('push door');
      expect(response.state.isCrateOpen).toBe(true);
    });
  });

  describe('Blanket', () => {
    it('Smell should smell like you', () => {
      expect(engine.getResponse('smell blanket')).toContain('It smells like you');
    });
    it('Looks should be descriptive', () => {
      expect(engine.getResponse('look at blanket')).toContain('soft');
    });
    it('Eat should be descriptive', () => {
      expect(engine.getResponse('eat blanket')).toContain('never');
    });
    it('Take should give a plausible reason', () => {
      expect(engine.getResponse('get blanket')).toContain('leave it');
    });
  });
});
