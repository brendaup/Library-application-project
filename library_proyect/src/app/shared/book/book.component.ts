import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { BookI } from 'src/app/core/services/book/book.models';
import { BookService } from 'src/app/core/services/book/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
 
  public originalBooks: BookI[] = [];
  /* public bookById: BookI[] = []; */
  
  constructor (private bookService: BookService){}
    //Recupero el listado de libros de la API
  public ngOnInit(): void {
      
    this.bookService.getBooks().subscribe((books: BookI[])=>{
      this.originalBooks = books;
    })
  }
  
}
