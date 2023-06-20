import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookI } from 'src/app/core/services/book/book.models'


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{

  public euroSymbol = '€'
  @Input() public bookInfo?: BookI; 

  @Output() public OnDeleteBook: EventEmitter<BookI> = new EventEmitter()
  
  public deleteBook(){
   this.OnDeleteBook.emit(this.bookInfo)
  }


}
