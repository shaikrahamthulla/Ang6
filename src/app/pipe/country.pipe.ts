import {Pipe, PipeTransform } from '@angular/core';

@Pipe( {name: "countryFilter" })
export class CountryPipe implements PipeTransform{

  transform(countries: string[], countryName: string ){
    let countryList = [];
    
    if(countryName.length > 0){
      for(var i=0; i<countries.length; i++){       
        if( countries[i].toLowerCase().startsWith(countryName)  )
          countryList.push(countries[i]);               
      }
      return countryList;
    } else {
      return countries;
    }
  }
}