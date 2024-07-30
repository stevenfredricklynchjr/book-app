import { Component } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [ NgFor, CurrencyPipe, ReactiveFormsModule, NgIf],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent {

  bookList: Book[] = [];

  bookToUpdate: Book = new Book('', '', '', 0);

  updateBookForm: FormGroup = new FormGroup({});
  

  constructor( private bookService:BookService, private fb: FormBuilder ) { }

  //once the component is initialized, get the list of books
  // if there is an error loading the books, logs the error on the console
  ngOnInit(){

    this.bookService.getBooks().subscribe({
      next: (response) => {
        this.bookList = response;
      },
      error: (error) => {
        console.log('Error getting books: ' + error);
      }
    });
  
  
  this.updateBookForm = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(0)] ],
  });
}

deleteBook(book: Book) {

  this.bookService.deleteBook(book.id).subscribe({
    next: () => {
      // have to remove the book from the list since the delete will only remove it from the data in the backend (API), but not from the frontend (Angular)
      this.bookList.splice(this.bookList.indexOf(book), 1);
    },
    error: (error) => {
      console.log('Error deleting book: ' + error);
    }
  });
}

// when Update button clicked for a book, this function is called so that values in the form are set 
openUpdateBookForm(book: Book) {

  this.bookToUpdate = book;

  this.updateBookForm.patchValue({
    title: book.title,
    author: book.author,
    price: book.price
  });
}

updateBook() {

  // replace possibly updated values in the book object
  this.bookToUpdate.title = this.updateBookForm.get('title')?.value;
  this.bookToUpdate.author = this.updateBookForm.get('author')?.value;
  this.bookToUpdate.price = this.updateBookForm.get('price')?.value;

  this.bookService.updateBook(this.bookToUpdate).subscribe({
    next: () => {
      // find index of updated book...
      const updatedBookIndex = this.bookList.findIndex(b => b.id === this.bookToUpdate.id);

      // ...if found, replace the updated book in the list on Angular's frontend
      if (updatedBookIndex !== -1) {
        this.bookList[updatedBookIndex] = this.bookToUpdate;
      }
    },
    error: (error) => {
      console.log('Error updating book: ' + error);
    }
  });
}

validField(f:string) {
  let field = this.updateBookForm.get(f);
  
  return ( field?.invalid && field.errors && (field.dirty || field.touched) );
}

getField(field:string) {
  return this.updateBookForm.get(field);
}
}
