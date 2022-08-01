import { Component, OnInit } from '@angular/core';
import { ImageViewerService } from '../image-viewer.service';

@Component({
  selector: 'app-image-viewer-container',
  templateUrl: './image-viewer-container.component.html',
  styleUrls: ['./image-viewer-container.component.scss'],
})
export class ImageViewerContainerComponent implements OnInit {
  src: string | undefined;
  opened: boolean = false;

  constructor(private imageViewerService: ImageViewerService) {
    imageViewerService.setContainer(this)
  }

  ngOnInit(): void {
  }

  open() {
    this.opened = true;
  }

  close(ev: MouseEvent) {
    if (ev.button === 0)
      this.opened = false;
  }

  setImagePath(path: string) {
    this.src = path;
  }
}
