import { BookService } from './../../core/services/book/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookI } from 'src/app/core/services/book/book.models';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit{

  public book?: BookI | undefined;
  public booksList: BookI[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService:BookService,
  ){}
      
    public ngOnInit(): void{
      //Traigo de mi API el listado completo de libros y lo guardo en la variable
      this.activatedRoute.params.subscribe((params)=>{
        const bookId = params['id'];

      this.bookService.getBooks().subscribe((books: BookI[])=>{
        this.booksList = books;
        
        this.book = this.booksList.find(book => book.id === bookId)
        console.log(this.book)
      });
      })
    }
      
  }
    
  
 
