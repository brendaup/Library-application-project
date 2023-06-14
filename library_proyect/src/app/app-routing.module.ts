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
{
  path:'create-book',
  loadChildren: ()=> import('src/app/features/create-book/create-book.module').then(m=> m.CreateBookModule)
},
{
  path:'my-creations',
  loadChildren: ()=> import('src/app/features/my-creations/my-creations.module').then(m=> m.MyCreationsModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
