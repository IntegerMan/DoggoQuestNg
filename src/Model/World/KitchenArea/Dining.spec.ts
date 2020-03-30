import {EngineTest} from '../../../app/EngineTest';
import {Room} from '../Room';

describe('Dining', () => {

  let engine: EngineTest;
  beforeEach(() => {
    engine = new EngineTest();
    engine.state.isCrateOpen = true;
    engine.state.currentRoom = Room.Dining;
  });

  describe('navigation', () => {
    it('Should allow navigation to the kitchen to the west', () => {
      const response = engine.getResponseState('go west');
      expect(response.state.currentRoom).toBe(Room.Kitchen);
    });
    it('Should allow navigation to the entryway to the north', () => {
      const response = engine.getResponseState('go north');
      expect(response.state.currentRoom).toBe(Room.Entryway);
    });
    it('Should allow navigation to the living room to the east', () => {
      const response = engine.getResponseState('go east');
      expect(response.state.currentRoom).toBe(Room.Living);
    });
    it('Should not allow navigation to the south', () => {
      const response = engine.getResponseState('go south');
      expect(response.state.currentRoom).toBe(Room.Dining);
      expect(response.responseText).toContain('shut');
    });
    it('Should not allow navigation onto the table', () => {
      const response = engine.getResponseState('go up');
      expect(response.state.currentRoom).toBe(Room.Dining);
      expect(response.responseText).toContain('high');
    });
  });

  describe('room', () => {
    it('Lists objects', () => {
      const response = engine.getResponse('look');
      expect(response).toContain('door');
      expect(response).toContain('outside');
      expect(response).toContain('food');
      expect(response).toContain('water');
      expect(response).toContain('table');
      expect(response).toContain('kitchen');
      expect(response).toContain('living');
      expect(response).toContain('entry');
    });
  });

  describe ('door', () => {
    const noun = 'door';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('outside');
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
      expect(engine.getResponse(`think about ${noun}`)).toContain('go potty');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain('locked');
    });
  });

  describe ('water', () => {
    const noun = 'water';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('water');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('normal');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('cold and wet');
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain('drink');
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('hockey');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain('paw');
    });
  });

  describe ('food', () => {
    const noun = 'food';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('kibble');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('kibble');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('ordinary');
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain('crunch');
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('boring');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain('paw');
    });
  });

  describe ('table', () => {
    const noun = 'table';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('wood');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('wood');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('yucky');
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain('coated');
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('dinner');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain('heavy');
    });
  });

  describe ('chair', () => {
    const noun = 'chair';

    it(`responds to look`, () => {
      expect(engine.getResponse(`look at ${noun}`)).toContain('wood');
    });
    it(`responds to smell`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('wood');
    });
    it(`responds to taste`, () => {
      expect(engine.getResponse(`smell ${noun}`)).toContain('yucky');
    });
    it(`responds to chew`, () => {
      expect(engine.getResponse(`chew ${noun}`)).toContain('coated');
    });
    it(`responds to think about`, () => {
      expect(engine.getResponse(`think about ${noun}`)).toContain('dinner');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain('heavy');
    });
  });

  describe ('kitchen', () => {
    const noun = 'kitchen';

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
      expect(engine.getResponse(`think about ${noun}`)).toContain('crumb');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain(`can't`);
    });
  });

  describe ('entryway', () => {
    const noun = 'entryway';

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
      expect(engine.getResponse(`think about ${noun}`)).toContain('crate');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain(`can't`);
    });
  });

  describe ('living room', () => {
    const noun = 'living room';

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
      expect(engine.getResponse(`think about ${noun}`)).toContain('TV');
    });
    it(`responds to push / open`, () => {
      expect(engine.getResponse(`push ${noun}`)).toContain(`can't`);
    });
  });

});
