import { TestBed } from '@angular/core/testing';

import { MemoireService } from './memoire.service';

describe('MemoireService', () => {
  let service: MemoireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
