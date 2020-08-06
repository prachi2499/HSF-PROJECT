import { TestBed, inject } from '@angular/core/testing';

import { AdvPortfolioServiceService } from './adv-portfolio-service.service';

describe('AdvPortfolioServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvPortfolioServiceService]
    });
  });

  it('should be created', inject([AdvPortfolioServiceService], (service: AdvPortfolioServiceService) => {
    expect(service).toBeTruthy();
  }));
});
