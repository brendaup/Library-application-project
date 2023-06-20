import { Pipe, PipeTransform } from '@angular/core';
import { BookI } from 'src/app/core/services/book/book.models';
import { filter } from 'rxjs'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: BookI[], filterValue: string): BookI[] {
    return value.filter((book) => book.title.toUpperCase().includes(filterValue.toUpperCase()));
  }

}

