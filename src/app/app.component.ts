import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { CdkMenu, CdkMenuTrigger, CdkMenuTriggerBase } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { ImageViewerContainerComponent } from '@core/components/image-viewer-container/image-viewer-container.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CdkMenu,
    CdkMenuTrigger,
    ImageViewerContainerComponent,
    RouterOutlet,
    RouterLink,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  public title: string = 'my-portfolio';

  public layoutChanges!: Observable<BreakpointState>;
  public isSmallScreen = signal<boolean>(false);

  constructor(
    breakpointObserver: BreakpointObserver,
  ) {
    breakpointObserver.observe([Breakpoints.XSmall])
      .pipe(takeUntilDestroyed())
      .subscribe((breakpointState) => {
        this.isSmallScreen.set(breakpointState.matches);
      });
  }

}
