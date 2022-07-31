import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';

  layoutChanges?: Observable<BreakpointState>

  constructor(private breakpointObserver: BreakpointObserver) {
    this.layoutChanges = breakpointObserver.observe([
      Breakpoints.XSmall
    ])
  }
}
