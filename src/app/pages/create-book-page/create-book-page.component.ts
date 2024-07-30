import { CurrencyPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CurrencyPipe],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css'
})
export class CreateBookPageComponent {

  // will display form if false or the new book data if true
  submitted: boolean = false;

  createdBook: any = {};

  newBookForm: FormGroup = new FormGroup( {} );

  constructor(private fb: FormBuilder, private bookService: BookService) { }

  ngOnInit() {
    this.newBookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      price: [0, [Validators.required, Validators.min (0)] ],
    });
  }

  onSubmit() {
    if (this.newBookForm.valid) {
      this.submitted = true;

      let newBook = {
        title: this.newBookForm.get('title')?.value,
        author: this.newBookForm.get('author')?.value,
        price: this.newBookForm.get('price')?.value
      };

      this.bookService.addBook(newBook).subscribe({
        next: (response) => {
          this.createdBook = response;
          console.log(response);

        },
        error:(error) => {
          console.log('Error adding book: ' + error);
        }
      });
    }
  }

  // resets the form and shows it again
  createAnotherBook(){
    this.submitted = false;
    this.newBookForm.reset();
  }

  validField(f:string) {
    let field = this.newBookForm.get(f);

    return ( field?.invalid && field.errors && (field.dirty || field.touched) );
  }

  getField(field:string) {
    return this.newBookForm.get(field);
  }
}
