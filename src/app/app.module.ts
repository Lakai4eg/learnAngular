import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostControllerComponent } from './components/post-controller/post-controller.component';
import { PostComponent } from './components/post/post.component';
import {FormsModule} from "@angular/forms";
import { PostGeneratorComponent } from './components/post-generator/post-generator.component';
import { FontDirective } from './directives/font.directive';
import { StructuredDirective } from './directives/structured.directive';
import { MultByPipe } from './pipes/mult-by.pipe';
import { PipesComponent } from './components/pipes/pipes.component';
import { PostFilterPipe } from './pipes/post-filter.pipe';

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
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
