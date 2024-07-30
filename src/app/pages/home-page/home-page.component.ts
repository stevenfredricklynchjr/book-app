import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  template: `
    <div>
      <div style="margin-bottom: 30px;">
        <h2>Welcome to the Book App!</h2>
      </div>
      <img src="/assets/books.jpeg" alt="Books"/>
    </div>
  `,
  styles: `
    h2 {
      text-align: center;
      font-size: 2.75em;
    }
    img {
      width: 80%;
      margin: 0 auto;
      display: block;
    }
  `
})
export class HomePageComponent {

}
