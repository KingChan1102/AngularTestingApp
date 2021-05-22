import { TestBed } from '@angular/core/testing';

import { StrengthServiceService } from './strength-service.service';

describe('StrengthServiceService', () => {
  let service: StrengthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrengthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
