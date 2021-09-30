import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostControllerComponent } from './components/post-controller/post-controller.component';
import { PostComponent } from './components/post/post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostGeneratorComponent } from './components/post-generator/post-generator.component';
import { FontDirective } from './directives/font.directive';
import { StructuredDirective } from './directives/structured.directive';
import { MultByPipe } from './pipes/mult-by.pipe';
import { PipesComponent } from './components/pipes/pipes.component';
import { PostFilterPipe } from './pipes/post-filter.pipe';
import { ServicesComponent } from './components/services/services.component';
import { InternalComponent } from './components/services/internal/internal.component';
import { FormsComponent } from './components/forms/forms.component';
import { WorkWithServerComponent } from './components/work-with-server/work-with-server.component';
import {HttpClientModule} from "@angular/common/http";
import { LoaderComponent } from './components/loader/loader.component';
import { RoutingComponent } from './components/routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    PostControllerComponent,
    PostComponent,
    PostGeneratorComponent,
    FontDirective,
    StructuredDirective,
    MultByPipe,
    PipesComponent,
    PostFilterPipe,
    ServicesComponent,
    InternalComponent,
    FormsComponent,
    WorkWithServerComponent,
    LoaderComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
