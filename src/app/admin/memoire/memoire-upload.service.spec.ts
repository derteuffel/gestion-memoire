import { TestBed } from '@angular/core/testing';

import { MemoireUploadService } from './memoire-upload.service';

describe('MemoireUploadService', () => {
  let service: MemoireUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoireUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
