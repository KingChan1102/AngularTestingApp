import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(places: any[], searchItem: string): any[] {

    if(!places || !searchItem){
      return places;
    }
    else{
      console.log(searchItem);
      return places.filter(placeObj=>placeObj.productTitle.toLowerCase().indexOf(searchItem.toLowerCase())!==-1 );
    }
  }

}
