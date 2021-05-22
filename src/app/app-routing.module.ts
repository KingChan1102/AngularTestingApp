import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddplacesComponent } from './addplaces/addplaces.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlacesComponent } from './places/places.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewplacesComponent } from './viewplaces/viewplaces.component';

const routes: Routes = [
  {path:"home" ,component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"contactus",component:ContactusComponent},
  {path:'test',component:TestComponent},
  {path:'test/:id',component:UserDetailsComponent},
  {path:'test2',component:Test2Component},
  {path:'cards',component:ProductsComponent,children:[
      {path:'places',component:PlacesComponent,children:[
        {path:'viewplaces',component:ViewplacesComponent},
        {path:'addplaces',component:AddplacesComponent},
        {path:'',redirectTo:'/cards/places/viewplaces',pathMatch:'full'}
      ]},
      {path:'food',component:FoodComponent},
      {path:'strengths',component:StrengthsComponent},
      {path:'',redirectTo:'/cards/places/viewplaces',pathMatch:'full'}]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'**' ,component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
