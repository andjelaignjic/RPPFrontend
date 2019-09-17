import { TestBed, inject } from '@angular/core/testing';

import { StavkaRacunaService } from './stavka-racuna.service';

describe('StavkaRacunaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StavkaRacunaService]
    });
  });

  it('should be created', inject([StavkaRacunaService], (service: StavkaRacunaService) => {
    expect(service).toBeTruthy();
  }));
});
