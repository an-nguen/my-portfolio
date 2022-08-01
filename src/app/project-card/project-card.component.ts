import { Component, Input, OnInit } from '@angular/core';
import { ImageViewerService } from '../image-viewer.service';

export interface Picture {
  path: string;
  description: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() pictures: Picture[] = []
  @Input() projectName: string = ""

  constructor(private imageViewerService: ImageViewerService) { }

  ngOnInit(): void {
  }

  openPicture(path: string) {
    this.imageViewerService.openImage(path)
  }
}
