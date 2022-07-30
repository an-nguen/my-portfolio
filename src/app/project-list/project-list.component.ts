import { Component, OnInit } from '@angular/core';
import { Picture } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  TRPictures: Picture[] = [
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
  bgBudgetPictures: Picture[] = [
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
