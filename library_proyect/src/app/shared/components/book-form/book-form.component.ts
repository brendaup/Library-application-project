import { GENRE_TYPE } from './genre-options';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BookI, genReType } from 'src/app/core/services/book/book.models'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
//Con este input indico si me llega algún libro para ver si tengo que crear o editar. Si me llega un libro edito y si no creo
 @Input() public book?: BookI;
  public bookForm?: FormGroup;
  public genreOptions: genReType [] = GENRE_TYPE;

  public constructor(private fb: FormBuilder){}

  public ngOnInit(): void{
    this.bookForm = this.fb.group({
      title: new FormControl ("", [Validators.required]),
      genre: new FormControl ("", [Validators.required]),
      author: new FormControl ("", [Validators.required]),
      year: new FormControl ("", [Validators.max(4)]),
      image: new FormControl ("", [Validators.required]),
    }) 
  }

  /* public createBook() {
    if(this.bookForm?.valid){
      const bookRequest = this.book
      ?
    }
  } */


}
