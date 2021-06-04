import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';

const routes: Routes = [{ path: '', component: AdminComponent ,children:[{
  path:"showproducts",component:ShowproductsComponent
}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
