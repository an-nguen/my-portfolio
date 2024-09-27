import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  public title: string = 'my-portfolio';

  public layoutChanges!: Observable<BreakpointState>;

  constructor(
    breakpointObserver: BreakpointObserver,
  ) {
    this.layoutChanges = breakpointObserver.observe([
      Breakpoints.XSmall,
    ]);
  }
}
