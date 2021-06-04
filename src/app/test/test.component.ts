import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myUsers:any[]=[];
  constructor(private fsObj:FakedataService,private router:Router) { }

  ngOnInit(): void {
    this.fsObj.getUsers().subscribe(
      userData=>{
        this.myUsers=userData;
        console.log(this.myUsers);
      },
      err=>{
        console.log('err: ',err)
      }
    )
    
  }
  onSelectId(id){
    this.router.navigateByUrl('test/'+id)
  }

}
