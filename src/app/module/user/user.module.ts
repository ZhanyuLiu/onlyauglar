import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { UserComponent } from './user.component';
import { CommonService } from "./services/common.service";


@NgModule({
  providers:[CommonService],
  exports:[UserComponent],
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, AddressComponent, UserComponent]
})
export class UserModule { }
