import { TestBed } from '@angular/core/testing';

import { ImageViewerService } from './image-viewer.service';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ImageViewerService', () => {
  let service: ImageViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideExperimentalZonelessChangeDetection()]
    });
    service = TestBed.inject(ImageViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

