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

  public book?: BookI;

 /*  public bookSubscription?: Subscription; */

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService:BookService,
  ){
    this.activatedRoute.params.subscribe((params)=>{
      const bookId = params['id'];

    this.bookService.getBooksById(bookId).subscribe((book: BookI)=>{
      this.book = book;
    });
  })
  }}
    
  
 
