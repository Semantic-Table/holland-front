import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TestComponent } from './components/test/test.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { ResultComponent } from './components/result/result.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    PresentationComponent,
    TestComponent,
    ResultComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
