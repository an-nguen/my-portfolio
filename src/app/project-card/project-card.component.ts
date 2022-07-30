import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
