import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from '@core/components/about/about.component';

@Component({
  standalone: true,
  imports: [
    AboutComponent
  ],
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent {

}
