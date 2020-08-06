import { TestBed, inject } from '@angular/core/testing';

import { AdvertisingServiceService } from './advertising-service.service';

describe('AdvertisingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertisingServiceService]
    });
  });

  it('should be created', inject([AdvertisingServiceService], (service: AdvertisingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
