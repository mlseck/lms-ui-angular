import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book.model';
import * as myGlobals from './global'; //File where global variables are declared
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService{
  private baseUrl = myGlobals.apiurl + "/api/books";  // web api URL
  constructor(private http : Http){
  }

  getAll(): Observable<Book[]>{
    console.log(this.baseUrl);
    return this.http.get(`${this.baseUrl}`)
      .map((response: Response) => response.json());
  }

  private extractData(res: Response) {
      let body = res.json();
      return body;
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  /*getAll(): Observable<Book[]>{
    console.log(this.http
      .get(`${this.baseUrl}/books`));
      let books$ = this.http
      .get(`${this.baseUrl}/books`)
      .map(this.mapBooks);
      return books$;
  }

  private toBook(r:any): Book{
   let book = <Book>({
     bookId: r.bookId,
     title: r.title,
     publisher: r.publisher,
     authors: [],
     genres: [],
   });
   console.log('Parsed book:', book);
   return book;
 }

  private mapBooks(response:Response): Book[]{
   // toPerson looks just like in the previous example
   return response.json().results.map(this.toBook)
 }



  getBooks() {
    return this.http.get(this.baseUrl)
        .map(res => <Book[]> res.json());
  }*/
}
