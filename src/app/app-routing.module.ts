import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostControllerComponent} from "./components/post-controller/post-controller.component";
import {PipesComponent} from "./components/pipes/pipes.component";
import {AppComponent} from "./app.component";

const routes: Routes =[
  { path: '', component: PostControllerComponent},
  { path: 'pipes', component: PipesComponent},
  { path: '*', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
