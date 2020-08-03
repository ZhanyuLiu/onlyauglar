import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticalRoutingModule } from './artical-routing.module';
import { ArticalComponent } from './artical.component';


@NgModule({
  declarations: [ArticalComponent],
  imports: [
    CommonModule,
    ArticalRoutingModule
  ]
})
export class ArticalModule { }
