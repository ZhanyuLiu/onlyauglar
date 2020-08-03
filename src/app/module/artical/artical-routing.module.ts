import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticalComponent } from "./artical.component";

const routes: Routes = [
  {
    path:'',component:ArticalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticalRoutingModule { }
