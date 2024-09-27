import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Picture, ProjectCardComponent } from '@core/components/project-card/project-card.component';

@Component({
  standalone: true,
  imports: [
    ProjectCardComponent,
  ],
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {

  public tagRprtPics: Picture[] = [
    {
      path: 'assets/TagReporterRZ0.png',
      description: 'Внешний вид',
    },
    {
      path: 'assets/TagReporterRZ1.png',
      description: 'График',
    },
    {
      path: 'assets/TagReporterRZ3.png',
      description: 'Пример отчёта (рабочая таблица - График)',
    },
    {
      path: 'assets/TagReporterRZ2.png',
      description: 'Пример отчёта (рабочая таблица - Данные)',
    },
  ];
  public bgBudgetPictures: Picture[] = [
    {
      path: 'assets/BGTrading0.png',
      description: 'Страница с бюджетом компании',
    },
    {
      path: 'assets/BGTrading1.png',
      description: 'Окно входа',
    },
    {
      path: 'assets/BGTrading2.png',
      description: 'Главная страница',
    },
  ];

}
