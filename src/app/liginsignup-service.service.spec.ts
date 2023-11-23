import { TestBed } from '@angular/core/testing';

import { LiginsignupServiceService } from './liginsignup-service.service';

describe('LiginsignupServiceService', () => {
  let service: LiginsignupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiginsignupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
