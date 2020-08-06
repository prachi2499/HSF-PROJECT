import { TestBed, inject } from '@angular/core/testing';

import { SubcatserService } from './subcatser.service';

describe('SubcatserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubcatserService]
    });
  });

  it('should be created', inject([SubcatserService], (service: SubcatserService) => {
    expect(service).toBeTruthy();
  }));
});
