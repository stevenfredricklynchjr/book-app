import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  template: `
  <header>
    <h1 class="display-3">Book App</h1>

    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-style">
      <div class="container-fluid">

        <!-- Home Link -->
        <!-- routerLinkActive = applies that class to style the link when page is currently selected -->
        <a class="navbar-brand" routerLink="/home" routerLinkActive="active-class">Home</a>

        <!-- Hamburger icon that appears when webpage is on a smaller screen like a phone -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- List of links in navbar -->
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" routerLink="/view" routerLinkActive="active-class">View</a>
            <a class="nav-link" routerLink="/add" routerLinkActive="active-class">Add</a>
          </div>
        </div>

      </div>
    </nav>

  </header>
  `,
  styles: `
    .nav-style {
      margin-bottom: 25px;
    }
    .active-class {
      color: #007bff;
      font-weight: bold;
    }
  `
})
export class HeaderComponent {

}
