import {EngineTest} from '../../../app/EngineTest';

describe('Crate', () => {

  describe('Blanket', () => {
    it('Smell should smell like you', () => {
      expect(EngineTest.getResponse('smell blanket')).toContain('It smells like you');
    });
  });
});
