import {EngineTest} from '../../../app/EngineTest';

describe('Crate', () => {

  describe('Blanket', () => {
    it('Smell should smell like you', () => {
      expect(EngineTest.getResponse('smell blanket')).toContain('It smells like you');
    });
    it('Looks should be descriptive', () => {
      expect(EngineTest.getResponse('look at blanket')).toContain('soft');
    });
    it('Eat should be descriptive', () => {
      expect(EngineTest.getResponse('eat blanket')).toContain('never');
    });
    it('Take should give a plausible reason', () => {
      expect(EngineTest.getResponse('get blanket')).toContain('leave it');
    });
  });
});
