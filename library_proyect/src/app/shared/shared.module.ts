import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    BookComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    BookComponent,
  ]
})
export class SharedModule { }
