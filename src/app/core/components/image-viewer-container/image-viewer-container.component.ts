import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ImageViewerService } from '../../services/image-viewer.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
  ],
  selector: 'app-image-viewer-container',
  templateUrl: './image-viewer-container.component.html',
  styleUrls: ['./image-viewer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageViewerContainerComponent {
  public src = signal<string | undefined>(undefined);
  public opened = signal<boolean>(false);

  constructor(imageViewerService: ImageViewerService) {
    imageViewerService.setContainer(this)
  }

  public open(): void {
    this.opened.set(true);
  }

  public close(ev: MouseEvent): void {
    if (ev.button === 0)
      this.opened.set(false);
  }

  public setImagePath(path: string): void {
    this.src.set(path);
  }
}
