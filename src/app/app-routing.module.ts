import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplatedrevenComponent} from './templatedreven/templatedreven.component';
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
const routes: Routes = [
  {path:"template",component:TemplatedrevenComponent},
  {path:"reactive",component:ReactiveformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
