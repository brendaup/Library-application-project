import { Component, OnInit } from '@angular/core';
import { BookService } from './../../core/services/book/book.service';
import { BookI } from 'src/app/core/services/book/book.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-creations',
  templateUrl: './my-creations.component.html',
  styleUrls: ['./my-creations.component.scss'],
})
export class MyCreationsComponent {
  public bookList: BookI[] = [];
  public filterValue: string = '';

  public bookSubscription?: Subscription;

  constructor(private bookService: BookService) {}

  public ngOnInit(): void {
    this.getBooks();
  }

  public deleteBook(book: BookI) {
    this.bookService.deleteBook(book.id).subscribe(() => {
      this.getBooks();
    });
  }

  private getBooks() {
    this.bookService.getBooks().subscribe((books: BookI[]) => {
      this.bookList = books.filter((book) => book.createbyme);
    });
  }

  public OnDestroy(): void {
    this.bookSubscription?.unsubscribe();
  }
}
