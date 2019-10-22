import {Pipe, PipeTransform } from '@angular/core';

@Pipe(  {name: "reverse"}  )
export class ReversePipe implements PipeTransform {
  
  transform(str : string): string{
    let reverseStr: string = "";
    if(str.length > 0){
      for(var i=str.length;i>=0; i--){
        reverseStr += str.charAt(i);
      }
      return reverseStr;
    } else {
      return "";
    }        
  }  
}