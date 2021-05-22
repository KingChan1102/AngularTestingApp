import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {console.log("hello")}

  ngOnInit(): void {
  }
  onLogin(ref:NgForm){
    let loginObj=ref.value;
    if(loginObj.email=='admin' && loginObj.password=='admin'){
      this.router.navigateByUrl('/admin')
    }
    else{
      alert('Enter Correct Credentials')
      ref.reset();
    }

  }

}
