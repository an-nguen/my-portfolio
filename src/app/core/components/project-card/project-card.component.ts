import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input, OnInit, signal } from '@angular/core';
import { ImageViewerService } from '@core/services/image-viewer.service';

export interface Picture {
  path: string;
  description: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {

  public pictures = input<Picture[]>([]);
  public projectName = input("");

  constructor(
    private imageViewerService: ImageViewerService
  ) { }

  public openPicture(path: string): void {
    this.imageViewerService.openImage(path)
  }
}
