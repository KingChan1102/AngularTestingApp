import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PlacesComponent } from './places/places.component';
import { FoodComponent } from './food/food.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewplacesComponent } from './viewplaces/viewplaces.component';
import { AddplacesComponent } from './addplaces/addplaces.component';
import { SquarePipe } from './square.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductsComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    PlacesComponent,
    FoodComponent,
    StrengthsComponent,
    PagenotfoundComponent,
    TestComponent,
    Test2Component,
    UserDetailsComponent,
    ViewplacesComponent,
    AddplacesComponent,
    SquarePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
