import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {

  private readonly BIRTH_DATE = new Date(1999, 12, 21)

  public readonly languages = [
    { name: 'C/C++' },
    { name: 'Go' },
    { name: 'Python' },
    { name: 'Java' },
    { name: 'Kotlin' },
    { name: 'Javascript/Typescript' },
    { name: 'Rust' },
  ]

  public getYearOld(): number {
    let now = new Date();
    return now.getFullYear() - this.BIRTH_DATE.getFullYear()
  }

}
