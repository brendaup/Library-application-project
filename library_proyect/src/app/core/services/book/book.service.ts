import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookI } from './book.models';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public baseUrl: string = 'https://64809ab9f061e6ec4d498f44.mockapi.io'

  constructor(
    private http: HttpClient
  ) { }

  //Obtengo de la API el listado de libros
  public getBooks(): Observable<BookI[]>{
    return this.http.get<BookI[]>(`${this.baseUrl}/books`);
  }
  //Obtengo de la API el libro con cierto id
  public getBooksById(id:string): Observable<BookI>{
    return this.http.get<BookI>(`${this.baseUrl}/books/${id}`);
  }






}
