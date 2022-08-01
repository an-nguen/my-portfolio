import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ImageViewerService } from './image-viewer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'my-portfolio';

  layoutChanges?: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver,
              private imageViewerService: ImageViewerService) {
    this.layoutChanges = breakpointObserver.observe([
      Breakpoints.XSmall,
    ]);
  }
}
