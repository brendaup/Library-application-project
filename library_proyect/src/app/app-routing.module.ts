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
  path:'edit-book/:id',
  loadChildren: ()=> import('src/app/features/edit-book/edit-book.module').then(m=> m.EditBookModule)
},
{
  path:'my-creations',
  loadChildren: ()=> import('src/app/features/my-creations/my-creations.module').then(m=> m.MyCreationsModule)
},
{
  path:'about',
  loadChildren: ()=> import('src/app/features/about/about.module').then(m=> m.AboutModule)
},
{
  path:'**',
  loadChildren: ()=> import('src/app/features/not-found/not-found.module').then(m=> m.NotFoundModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
