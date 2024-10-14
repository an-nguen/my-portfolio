import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerContainerComponent } from './image-viewer-container.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ImageViewerContainerComponent', () => {
  let component: ImageViewerContainerComponent;
  let fixture: ComponentFixture<ImageViewerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageViewerContainerComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageViewerContainerComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
