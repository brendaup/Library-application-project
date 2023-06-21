import { BookService } from './../../core/services/book/book.service';
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { BookI, OrderCriteria } from 'src/app/core/services/book/book.models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  public bookList: BookI[] = [];
  public filterValue: string = '';
  public orderCriteria?: OrderCriteria;

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
      this.bookList = books;
    });
  }

  public OnDestroy(): void {
    this.bookSubscription?.unsubscribe();
  }
}
