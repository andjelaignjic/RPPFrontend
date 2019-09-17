import { TestBed, inject } from '@angular/core/testing';

import { RacunService } from './racun.service';

describe('RacunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacunService]
    });
  });

  it('should be created', inject([RacunService], (service: RacunService) => {
    expect(service).toBeTruthy();
  }));
});
