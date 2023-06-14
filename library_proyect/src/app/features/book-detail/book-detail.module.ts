import { BookDetailComponent } from './book-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailRoutingModule } from './book-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BookDetailRoutingModule,
    SharedModule,
    RouterModule,
  ],
  exports:[
    BookDetailComponent,
  ]

})
export class BookDetailModule { }
