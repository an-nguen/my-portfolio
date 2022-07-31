import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {
    path: "",
    component: MainViewComponent
  },
  {
    path: "projects",
    component: ProjectListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
