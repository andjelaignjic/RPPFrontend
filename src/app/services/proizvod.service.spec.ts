import { TestBed, inject } from '@angular/core/testing';

import { ProizvodService } from './proizvod.service';

describe('ProizvodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProizvodService]
    });
  });

  it('should be created', inject([ProizvodService], (service: ProizvodService) => {
    expect(service).toBeTruthy();
  }));
});
