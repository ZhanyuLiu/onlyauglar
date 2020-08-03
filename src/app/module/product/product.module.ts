import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddressComponent } from './components/address/address.component';
import { TotalComponent } from './components/total/total.component';


@NgModule({
  declarations: [ProductComponent, AddressComponent, TotalComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
