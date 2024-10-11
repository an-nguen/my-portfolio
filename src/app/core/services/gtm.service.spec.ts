import { TestBed } from '@angular/core/testing';

import { GTMService } from './gtm.service';

describe('GTMService', () => {
  let service: GTMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GTMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
