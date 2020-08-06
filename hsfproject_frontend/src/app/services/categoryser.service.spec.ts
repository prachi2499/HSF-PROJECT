import { TestBed, inject } from '@angular/core/testing';

import { CategoryserService } from './categoryser.service';

describe('CategoryserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryserService]
    });
  });

  it('should be created', inject([CategoryserService], (service: CategoryserService) => {
    expect(service).toBeTruthy();
  }));
});
