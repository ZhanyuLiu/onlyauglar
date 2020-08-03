import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'user', loadChildren:'./module/user/user.module#UserModule'
  // },
  {
    path:'artical',
    loadChildren:'./module/artical/artical.module#ArticalModule'
  },
  {
    path:'product',
    loadChildren:'./module/product/product.module#ProductModule'
  },
  {
    path:'**',
    redirectTo:'artical'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
