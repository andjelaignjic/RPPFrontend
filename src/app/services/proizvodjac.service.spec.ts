import { TestBed, inject } from '@angular/core/testing';

import { ProizvodjacService } from './proizvodjac.service';

describe('ProizvodjacService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProizvodjacService]
    });
  });

  it('should be created', inject([ProizvodjacService], (service: ProizvodjacService) => {
    expect(service).toBeTruthy();
  }));
});
