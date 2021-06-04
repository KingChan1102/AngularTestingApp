import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Place } from '../models/places.model';

@Component({
  selector: 'app-addplaces',
  templateUrl: './addplaces.component.html',
  styleUrls: ['./addplaces.component.css']
})
export class AddplacesComponent implements OnInit {

  constructor(private placeService:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  placeModel=new Place('','','');
  onSubmitNewPlace(ref:NgForm){
    this.placeService.createNewPlace(this.placeModel).subscribe(
      data=>{
        this.router.navigateByUrl('/cards/places')
      },
      err=>{
        console.log('err is ',err)
      }
    )
    
    ref.reset();
  }
}
