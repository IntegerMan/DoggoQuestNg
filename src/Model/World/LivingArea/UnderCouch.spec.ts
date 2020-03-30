import {EngineTest} from '../../../app/EngineTest';
import {Room} from '../Room';

describe('On Chair', () => {

  let engine: EngineTest;
  beforeEach(() => {
    engine = new EngineTest();
    engine.state.isCrateOpen = true;
    engine.state.currentRoom = Room.UnderCouch;
  });

  describe('navigation', () => {
    it('Should allow navigation to the living room', () => {
      const response = engine.getResponseState('go out');
      expect(response.state.currentRoom).toBe(Room.Living);
    });
  });

  describe('room', () => {
    it('Lists objects', () => {
      const response = engine.getResponse('look');
      expect(response).toContain('dark');
      expect(response).toContain('couch');
      expect(response).toContain('exit');
    });
  });

  describe('couch', () => {
    it('Looks different', () => {
      expect(engine.getResponse('look at couch')).toContain('different');
    });
    it('Smells like mommy and daddy', () => {
      expect(engine.getResponse('smell couch')).toContain('mommy');
    });
  });
});
