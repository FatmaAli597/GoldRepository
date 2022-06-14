import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartID'
})
export class CartIDPipe implements PipeTransform {

 
  transform(crdit:string): string {

    return crdit.slice(0,4)+"-"+crdit.slice(4,8)+"-"+crdit.slice(8,12)+"-"+crdit.slice(12,16);
  }


}
