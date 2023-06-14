import { Component, OnInit } from '@angular/core';
import { BookI } from 'src/app/core/services/book/book.models'
import { BookService } from 'src/app/core/services/book/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{

  public bookInfo: BookI[] = [];

  constructor (private bookService: BookService){}

  public ngOnInit(): void {
    //Recupero el listado de libros de la API  
      this.bookService.getBooks().subscribe((books: BookI[])=>{
        this.bookInfo = [...books];
        
      });
}
}
