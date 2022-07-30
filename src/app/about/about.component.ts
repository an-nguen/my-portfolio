import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private birthDate = new Date(1999, 12, 21)

  constructor() { }

  ngOnInit(): void {
  }

  getYearOld(): number {
    let now = new Date();
    return  now.getFullYear() - this.birthDate.getFullYear()
  }
}
