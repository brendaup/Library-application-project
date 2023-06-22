import { AuthorService } from './../../core/services/author/author.service';
import { BookService } from './../../core/services/book/book.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookI } from 'src/app/core/services/book/book.models';
import { Subscription, switchMap, tap } from 'rxjs';
import { AuthorI } from 'src/app/core/services/author/author.models';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  public book?: BookI;
  public bookAuthor?: AuthorI;
  public bookSubscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const bookId = params['id'];

      this.bookService.getBooksById(bookId).pipe(
        tap((book: BookI)=>{
          this.book = book;
        }),
        switchMap((book: BookI)=>{
          return this.authorService.getAuthorById(book.author);
        })
      ).subscribe((author: AuthorI)=>{
        this.bookAuthor = author;
      })
    });
  }

  public ngOnDestroy(): void {
    this.bookSubscription?.unsubscribe();
  }
}
