import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = 'http://localhost:3000/book';
  
  constructor(private http:HttpClient) {}

  getBooks(){
    return this.http.get<Book[]>( this.url );
  }

  getBooksById(id:string){
    return this.http.get<Book>( this.url + "/" + id);
  }

  addBook(newBook:any){
    return this.http.post(this.url, newBook);
  }

  updateBook(updatedBook:Book){
    return this.http.put(this.url + "/" + updatedBook.id, updatedBook);
  }

  deleteBook(id:string){
    return this.http.delete(this.url + "/" + id);
  }
}
