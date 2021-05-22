import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  myUsers:any={};

  constructor(private ar:ActivatedRoute,private fsObj:FakedataService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id
    this.myUsers=this.fsObj.getUserById(id).subscribe(
      data=>{
        this.myUsers=data;
      },
      err=>{console.log('err is',err)}
    )
  }

}
