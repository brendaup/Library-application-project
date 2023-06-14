import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: CreateBookComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBookRoutingModule { }
