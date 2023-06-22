import { Observable, pipe, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookI } from './book.models';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  public baseUrl: string = 'https://64809ab9f061e6ec4d498f44.mockapi.io';

  constructor(private http: HttpClient) {}

  public getBooks(): Observable<BookI[]> {
    return this.http.get<BookI[]>(`${this.baseUrl}/books`);
  }

  public getBooksById(id: string): Observable<BookI> {
    return this.http.get<BookI>(`${this.baseUrl}/books/${id}`);
  }

  public createBook(book: BookI): Observable<BookI> {
    return this.http.post<BookI>(`${this.baseUrl}/books`, book);
  }

  public editBook(id: string, body: BookI): Observable<BookI> {
    return this.http.put<BookI>(`${this.baseUrl}/books/${id}`, body);
  }

  public deleteBook(id: string): Observable<BookI> {
    return this.http.delete<BookI>(`${this.baseUrl}/books/${id}`);
  }
}
