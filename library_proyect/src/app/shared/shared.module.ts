import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookFormComponent } from './components/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './components/book/book.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { OrderPipe } from './pipes/order/order.pipe';




@NgModule({
  declarations: [
    BookFormComponent,
    BookComponent,
    FilterPipe,
    OrderPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports:[
    BookFormComponent,
    BookComponent,
    FilterPipe,
    OrderPipe,
  ]

})
export class SharedModule { }
