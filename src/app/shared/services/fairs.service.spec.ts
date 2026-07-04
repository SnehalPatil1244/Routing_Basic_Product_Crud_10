import { TestBed } from '@angular/core/testing';

import { FairsService } from './fairs.service';

describe('FairsService', () => {
  let service: FairsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FairsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
