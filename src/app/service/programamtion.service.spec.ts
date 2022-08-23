import { TestBed } from '@angular/core/testing';

import { ProgramamtionService } from './programamtion.service';

describe('ProgramamtionService', () => {
  let service: ProgramamtionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramamtionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
