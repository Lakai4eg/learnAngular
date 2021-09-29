import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostControllerComponent} from "./components/post-controller/post-controller.component";
import {PipesComponent} from "./components/pipes/pipes.component";
import {ServicesComponent} from "./components/services/services.component";
import {FormsComponent} from "./components/forms/forms.component";

const routes: Routes =[
  { path: '', component: PostControllerComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'forms', component: FormsComponent},
  { path: '*', component: PostControllerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
