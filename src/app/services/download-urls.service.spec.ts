import { TestBed } from '@angular/core/testing';

import { DownloadURLsService } from './download-urls.service';

describe('DownloadURLsService', () => {
  let service: DownloadURLsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadURLsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
