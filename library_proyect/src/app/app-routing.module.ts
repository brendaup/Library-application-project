import { BookListModule } from './features/book-list/book-list.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',
  pathMatch: 'full',
  redirectTo: 'home',
},
{
  path:'home',
  pathMatch: 'prefix',
  loadChildren: ()=> import('src/app/features/home/home.module').then(m=> m.HomeModule)
},
{
  path:'book-list',
  loadChildren: ()=> import('src/app/features/book-list/book-list.module').then(m=> m.BookListModule)
},
{
  path:'book-detail/:id',
  loadChildren: ()=> import('src/app/features/book-detail/book-detail.module').then(m=> m.BookDetailModule)
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
