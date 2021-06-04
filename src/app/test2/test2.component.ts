import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  myUsers2:any={};
  constructor(private fsObj:FakedataService) { }

  ngOnInit(): void {
    this.fsObj.getUsers2().subscribe(
      usersData2=>{
        this.myUsers2=usersData2;
      },
      err=>{
        console.log('err:',err);
      }
    )
  }

}
