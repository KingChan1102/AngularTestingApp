import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  users=[];

 
  addUserData(ref:NgForm){

    let userObj=ref.value;
    
    //push into users array
    this.users.push(userObj)

    //clear form flields
    ref.reset();
  }
}