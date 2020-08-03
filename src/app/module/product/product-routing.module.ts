import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from "./product.component";

import { AddressComponent } from './components/address/address.component';
import { TotalComponent } from './components/total/total.component';

const routes: Routes = [
  {
    path:'',component:ProductComponent,
    children: [
      {
        path:'address',component:AddressComponent
      }
    ]
  },
  {
    path:'total',component:TotalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
