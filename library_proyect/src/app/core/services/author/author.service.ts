import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorI } from './author.models';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  public baseUrl: string = 'https://64809ab9f061e6ec4d498f44.mockapi.io';

  constructor(private http: HttpClient) { }

  public getAuthor(): Observable<AuthorI[]>{
    return this.http.get<AuthorI[]>(`${this.baseUrl}/author`)
  }

  public getAuthorById(id: string): Observable<AuthorI>{
    return this.http.get<AuthorI>(`${this.baseUrl}/author?name=${id}`)
  }

}
