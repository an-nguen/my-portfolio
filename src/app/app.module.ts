import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AboutComponent } from './about/about.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ImageViewerContainerComponent } from './image-viewer-container/image-viewer-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectListComponent,
    AboutComponent,
    MainViewComponent,
    ImageViewerContainerComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CdkMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
