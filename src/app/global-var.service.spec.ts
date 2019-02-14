import { TestBed } from '@angular/core/testing';

import { GlobalVarService } from './global-var.service';

describe('GlobalVarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalVarService = TestBed.get(GlobalVarService);
    expect(service).toBeTruthy();
  });
});
