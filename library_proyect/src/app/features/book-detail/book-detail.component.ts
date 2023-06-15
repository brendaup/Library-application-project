import { BookService } from './../../core/services/book/book.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookI } from 'src/app/core/services/book/book.models';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent{

  public book?: BookI | undefined;
  public booksList: BookI[] = [];
  public bookSubscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService:BookService,
  ){
    this.activatedRoute.params.subscribe((params)=>{
      const bookId = params['id'];

    this.bookService.getBooks().subscribe((books: BookI[])=>{
      this.booksList = books;
      
      this.book = this.booksList.find(book => book.id === bookId)
      console.log(this.book)
    });
    })
  }
      

      
    public OnDestroy(): void{
      this.bookSubscription?.unsubscribe();
    }
  }
    
  
 
