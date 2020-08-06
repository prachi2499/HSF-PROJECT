import { TestBed, inject } from '@angular/core/testing';

import { WorkgallService } from './workgall.service';

describe('WorkgallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkgallService]
    });
  });

  it('should be created', inject([WorkgallService], (service: WorkgallService) => {
    expect(service).toBeTruthy();
  }));
});
