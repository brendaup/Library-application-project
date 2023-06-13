import { BookService } from './../../core/services/book/book.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookI } from 'src/app/core/services/book/book.models';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  public originalBook?: BookI[];
  public bookById?: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private bookService: BookService
  ){};

  public ngOnInit(): void{
    
  /*   this.activateRoute.params.subscribe((params)=> {
      const idFromRuoute = params['id']
    })
 */

  };
};
