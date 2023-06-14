import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookComponent,

  ],
  imports: [
    CommonModule,
    BookListRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BookListComponent,
  ]
})
export class BookListModule { }
