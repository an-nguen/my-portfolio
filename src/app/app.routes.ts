import { Routes } from '@angular/router';
import { MainViewComponent } from './core/pages/main-view/main-view.component';
import { ProjectListComponent } from './core/pages/project-list/project-list.component';

export const routes: Routes = [
  {
    path: "",
    component: MainViewComponent
  },
  {
    path: "projects",
    component: ProjectListComponent
  }
];
