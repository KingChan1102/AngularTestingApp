import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlacesComponent } from './places/places.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { StrengthsComponent } from './strengths/strengths.component';

const routes: Routes = [
  {path:"home" ,component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"contactus",component:ContactusComponent},
  {path:'cards',component:ProductsComponent,children:[
      {path:'places',component:PlacesComponent},
      {path:'food',component:FoodComponent},
      {path:'strengths',component:StrengthsComponent},
      {path:'',redirectTo:'/cards/places',pathMatch:'full'}]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**' ,component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
