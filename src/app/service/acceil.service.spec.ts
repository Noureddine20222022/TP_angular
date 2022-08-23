import { TestBed } from '@angular/core/testing';

import { AcceilService } from './acceil.service';

describe('AcceilService', () => {
  let service: AcceilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
