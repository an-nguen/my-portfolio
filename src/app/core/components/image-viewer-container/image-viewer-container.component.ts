import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ImageViewerService } from '../../services/image-viewer.service';

@Component({
  standalone: true,
  selector: 'app-image-viewer-container',
  templateUrl: './image-viewer-container.component.html',
  styleUrls: ['./image-viewer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageViewerContainerComponent implements OnInit {
  src: string | undefined;
  opened: boolean = false;

  constructor(private readonly imageViewerService: ImageViewerService) {
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
