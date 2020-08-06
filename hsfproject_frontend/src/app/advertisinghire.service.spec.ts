import { TestBed, inject } from '@angular/core/testing';

import { AdvertisinghireService } from './advertisinghire.service';

describe('AdvertisinghireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertisinghireService]
    });
  });

  it('should be created', inject([AdvertisinghireService], (service: AdvertisinghireService) => {
    expect(service).toBeTruthy();
  }));
});
