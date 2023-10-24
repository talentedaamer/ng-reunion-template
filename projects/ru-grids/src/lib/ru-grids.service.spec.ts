import { TestBed } from '@angular/core/testing';

import { RuGridsService } from './ru-grids.service';

describe('RuGridsService', () => {
  let service: RuGridsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuGridsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
