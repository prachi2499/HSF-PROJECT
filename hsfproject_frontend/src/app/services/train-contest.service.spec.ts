import { TestBed, inject } from '@angular/core/testing';

import { TrainContestService } from './train-contest.service';

describe('TrainContestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainContestService]
    });
  });

  it('should be created', inject([TrainContestService], (service: TrainContestService) => {
    expect(service).toBeTruthy();
  }));
});
