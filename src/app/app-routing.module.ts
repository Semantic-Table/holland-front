import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {LoginComponent} from "./components/login/login.component";
import {PresentationComponent} from "./components/presentation/presentation.component";
import {TestComponent} from "./components/test/test.component";
import {ResultComponent} from "./components/result/result.component";

const routes : Routes = [

  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "presentation", component: PresentationComponent},
  {path: "test", component: TestComponent},
  {path: "result", component: ResultComponent},
  {path: "**", component: LoginComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
