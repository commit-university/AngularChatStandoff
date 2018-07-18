import { TestBed, inject } from '@angular/core/testing';

import { ChatkitService } from './chatkit.service';

describe('ChatkitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatkitService]
    });
  });

  it('should be created', inject([ChatkitService], (service: ChatkitService) => {
    expect(service).toBeTruthy();
  }));
});
