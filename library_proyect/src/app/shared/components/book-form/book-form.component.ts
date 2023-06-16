import { BookService } from './../../../core/services/book/book.service';
import { GENRE_TYPE } from './genre-options';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookI, genReType } from 'src/app/core/services/book/book.models'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

 @Input() public book?: BookI;

  public bookForm?: FormGroup;
  public genreOptions: genReType [] = GENRE_TYPE;
  public bookSubscription?: Subscription;

  public constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ){}

  public ngOnInit(): void{
    this.bookForm = this.fb.group({
      title: new FormControl (this.book?.title || "", [Validators.required]),
      genre: new FormControl (this.book?.genre || "", [Validators.required]),
      author: new FormControl (this.book?.author || "", [Validators.required]),
      year: new FormControl (this.book?.year || "", [Validators.required]),
      image: new FormControl (this.book?.image || "", [Validators.required]),
      synopsis: new FormControl (this.book?.synopsis || "", [Validators.required]),
    }) 
  }


   public createBook() {
    if(this.bookForm?.valid){
      const myCreasionBook = {...this.bookForm.value, createbyme: true}
      const bookRequest = this.book
      ? this.bookService.editBook(this.book.id, this.bookForm.value)
      : this.bookService.createBook(myCreasionBook);
      bookRequest.subscribe((book: BookI)=>{
        this.bookForm?.reset();
        this.router.navigateByUrl('my-creations')
      })
    }
  } 

  public OnDestroy(): void{
    this.bookSubscription?.unsubscribe();
  }
}
