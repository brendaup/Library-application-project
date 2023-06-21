import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookI } from 'src/app/core/services/book/book.models';
import { BookService } from 'src/app/core/services/book/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent {
  public book?: BookI;

  public bookSubscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const bookId = params['id'];

      this.bookService.getBooksById(bookId).subscribe((book: BookI) => {
        this.book = book;
      });
    });
  }

  public OnDestroy(): void {
    this.bookSubscription?.unsubscribe();
  }
}
