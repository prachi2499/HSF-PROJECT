import { TestBed, inject } from '@angular/core/testing';

import { BrandContestService } from './brand-contest.service';

describe('BrandContestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandContestService]
    });
  });

  it('should be created', inject([BrandContestService], (service: BrandContestService) => {
    expect(service).toBeTruthy();
  }));
});
