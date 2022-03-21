import { TestBed } from '@angular/core/testing';

import { SupplyService } from './supply-service.service';

describe('SupplyService', () => {
  let service: SupplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
