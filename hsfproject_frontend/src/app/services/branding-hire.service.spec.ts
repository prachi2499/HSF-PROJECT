import { TestBed, inject } from '@angular/core/testing';

import { BrandingHireService } from './branding-hire.service';

describe('BrandingHireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandingHireService]
    });
  });

  it('should be created', inject([BrandingHireService], (service: BrandingHireService) => {
    expect(service).toBeTruthy();
  }));
});
