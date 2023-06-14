import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBookRoutingModule } from './create-book-routing.module';
import { CreateBookComponent } from './create-book.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    CreateBookRoutingModule,
    SharedModule,
  ]
})
export class CreateBookModule { }
