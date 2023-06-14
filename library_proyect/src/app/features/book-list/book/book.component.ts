
import { Component, Input } from '@angular/core';
import { BookI } from 'src/app/core/services/book/book.models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() public bookInfo?: BookI;

}
