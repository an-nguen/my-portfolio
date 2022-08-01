import { ElementRef, Injectable } from '@angular/core';
import { ImageViewerContainerComponent } from './image-viewer-container/image-viewer-container.component';

@Injectable({
  providedIn: 'root'
})
export class ImageViewerService {
  private container: ImageViewerContainerComponent | undefined

  constructor() { }

  setContainer(container: ImageViewerContainerComponent) {
    this.container = container;
  }

  openImage(path: string) {
    if (this.container == undefined) return
    this.container.setImagePath(path)
    this.container.open()
  }
}
