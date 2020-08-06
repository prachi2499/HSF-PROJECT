import { TestBed, inject } from '@angular/core/testing';

import { AdvContestService } from './adv-contest.service';

describe('AdvContestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvContestService]
    });
  });

  it('should be created', inject([AdvContestService], (service: AdvContestService) => {
    expect(service).toBeTruthy();
  }));
});
