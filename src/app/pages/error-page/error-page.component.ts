import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="alert alert-danger" role="alert">
      <h4 class="alert-heading">Error: 404 Page Not Found</h4>
      <p>Please check your URL, the page you requested was not found. Click on this <a routerLink="/home" class="alert-link">link</a> to return to our home page.</p>
    </div>
  `,
  styles: ``
})
export class ErrorPageComponent {

}
