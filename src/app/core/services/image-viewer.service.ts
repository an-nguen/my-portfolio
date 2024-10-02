import { Injectable } from '@angular/core';
import { ImageViewerContainerComponent } from '@core/components/image-viewer-container/image-viewer-container.component';

@Injectable({
  providedIn: 'root'
})
export class ImageViewerService {

  private container!: ImageViewerContainerComponent;

  public setContainer(container: ImageViewerContainerComponent): void {
    this.container = container;
  }

  public openImage(path: string): void {
    if (this.container == undefined)
      return;
    this.container.setImagePath(path);
    this.container.open();
  }

}
