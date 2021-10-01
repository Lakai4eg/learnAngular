import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostControllerComponent} from "./components/post-controller/post-controller.component";
import {PipesComponent} from "./components/pipes/pipes.component";
import {ServicesComponent} from "./components/services/services.component";
import {FormsComponent} from "./components/forms/forms.component";
import {WorkWithServerComponent} from "./components/work-with-server/work-with-server.component";
import {RoutingComponent} from "./components/routing/routing.component";
import {RoutingItemFirstComponent} from "./components/routing/routing-item/routing-item-first/routing-item-first.component";
import {RoutingItemSecondComponent} from "./components/routing/routing-item/routing-item-second/routing-item-second.component";
import {AuthGuard} from "./services/auth.guard";

const routingItem: Routes = [
  { path: 'first', component: RoutingItemFirstComponent},
  { path: 'second', component: RoutingItemSecondComponent}
]

const routes: Routes =[
  { path: '', component: PostControllerComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'server', component: WorkWithServerComponent},
  { path: 'routing/:id', component: RoutingComponent, children: routingItem, canActivate: [AuthGuard]},
  { path: 'routing', redirectTo: 'routing/1'},
  { path: '**', component: PostControllerComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
