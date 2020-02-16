import { TestBed } from '@angular/core/testing';

import { VerbService } from './verb.service';

describe('VerbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerbService = TestBed.get(VerbService);
    expect(service).toBeTruthy();
  });
});
