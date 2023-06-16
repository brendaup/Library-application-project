import { BookService } from './../../core/services/book/book.service';
import { Component, OnInit, OnDestroy,Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookI } from 'src/app/core/services/book/book.models';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  //Aquí guardo el listado de libros
  public bookList: BookI[] = [];
  public filterValue: string = "";
 
  
  //Guardo subscribe para desuscribirme luego
  public bookSubscription?: Subscription;

  constructor (private bookService: BookService){}
  
  public ngOnInit(): void {
  //Recupero el listado de libros de la API  
  this.getBooks();
  }

  public deleteBook(book: BookI){
    this.bookService.deleteBook(book.id).subscribe(()=>{
    this.getBooks()
    });
  }

  private getBooks(){
    this.bookService.getBooks().subscribe((books: BookI[])=>{
      this.bookList = books;
    });
  }
  
  public OnDestroy(): void{
    this.bookSubscription?.unsubscribe();
  }
}
