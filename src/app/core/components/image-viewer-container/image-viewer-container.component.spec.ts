import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerContainerComponent } from './image-viewer-container.component';

describe('ImageViewerContainerComponent', () => {
  let component: ImageViewerContainerComponent;
  let fixture: ComponentFixture<ImageViewerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageViewerContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageViewerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
