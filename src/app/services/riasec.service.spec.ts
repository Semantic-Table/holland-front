import { TestBed } from '@angular/core/testing';

import { RiasecService } from './riasec.service';

describe('RiasecService', () => {
  let service: RiasecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiasecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
