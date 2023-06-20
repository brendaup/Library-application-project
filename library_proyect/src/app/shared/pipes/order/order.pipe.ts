import { Pipe, PipeTransform } from '@angular/core';
import { BookI, OrderCriteria } from 'src/app/core/services/book/book.models';

@Pipe({
  name: 'order',
  pure: true,
})
export class OrderPipe implements PipeTransform {

  transform(
    array: BookI[],
    criteria?: OrderCriteria,
  ): BookI[] {
    if(!criteria){
      return array
    }
    const arraySorted = array.sort(
      (a: BookI, b: BookI) =>{
        const titleA = a.title.toLocaleLowerCase();
        const titleB = b.title.toLocaleLowerCase();

        if(criteria === "asc"){
          if(titleA < titleB){
            return -1;
          } else if (titleA > titleB){
            return 1;
          } else {
            return 0;
          }
        } else {
          if (titleB < titleA){
            return -1;
          } else if(titleB > titleA){
            return 1;
          } else{
            return 0;
          }
        }
      }
    );
    return arraySorted;    
  }
}

