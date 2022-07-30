import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() pictures: string[] = []
  @Input() description: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
