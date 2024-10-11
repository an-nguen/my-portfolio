import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { CdkMenu, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { ImageViewerContainerComponent } from '@core/components/image-viewer-container/image-viewer-container.component';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GTMService } from '@core/services/gtm.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CdkMenu,
    CdkMenuTrigger,
    ImageViewerContainerComponent,
    RouterOutlet,
    RouterLink
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  public title: string = 'my-portfolio';

  public layoutChanges!: Observable<BreakpointState>;
  public isSmallScreen = signal<boolean>(false);

  constructor(
    breakpointObserver: BreakpointObserver,
    private readonly _gtmSvc: GTMService,
    private readonly _router: Router,
    private readonly _destroyRef: DestroyRef,
  ) {
    breakpointObserver.observe([Breakpoints.XSmall])
      .pipe(takeUntilDestroyed())
      .subscribe((breakpointState) => {
        this.isSmallScreen.set(breakpointState.matches);
      });
  }

  public ngOnInit(): void {
    this._gtmSvc.addGTMScript();
    this._subToRouteChange();
  }

  private _subToRouteChange(): void {
    this._router.events
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this._gtmSvc.pushOnDataLayer({
            event: 'page',
            pageName: e.url
          });
        }
      });
  }

}
