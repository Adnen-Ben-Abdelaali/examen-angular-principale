import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./video/video.component";
import {VideoFormComponent} from "./video-form/video-form.component";

const routes: Routes = [
  {path:'newVideo', component: VideoFormComponent},
  {path:'video', component: VideoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
