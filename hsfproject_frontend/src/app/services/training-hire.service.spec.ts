import { TestBed, inject } from '@angular/core/testing';

import { TrainingHireService } from './training-hire.service';

describe('TrainingHireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingHireService]
    });
  });

  it('should be created', inject([TrainingHireService], (service: TrainingHireService) => {
    expect(service).toBeTruthy();
  }));
});
