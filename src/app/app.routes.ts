import { Routes } from '@angular/router';
import { PortfolioComponent } from './core/pages/portfolio/portfolio.component';
import { ProjectListComponent } from './core/pages/project-list/project-list.component';

export const routes: Routes = [
  {
    path: "",
    component: PortfolioComponent
  },
  {
    path: "projects",
    component: ProjectListComponent
  }
];
