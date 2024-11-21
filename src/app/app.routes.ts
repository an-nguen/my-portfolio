import { Routes } from '@angular/router';
import { PortfolioComponent } from './core/pages/portfolio/portfolio.component';
import { ProjectListComponent } from './core/pages/project-list/project-list.component';
import { NotFoundComponent } from '@core/pages/not-found/not-found.component';
import { PortfolioPrettyComponent } from '@core/pages/portfolio-pretty/portfolio-pretty.component';

export const routes: Routes = [
  {
    path: "",
    component: PortfolioPrettyComponent
  },
  {
    path: "as-a-code",
    component: PortfolioComponent
  },
  {
    path: "projects",
    component: ProjectListComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
