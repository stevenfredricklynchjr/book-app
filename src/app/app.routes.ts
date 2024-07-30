import { Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { CreateBookPageComponent } from './pages/create-book-page/create-book-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
    {
        path:'view',
        component: BooksPageComponent
    },

    {
        path:'add',
        component: CreateBookPageComponent
    },

    {
        path:'home',
        component: HomePageComponent
    },

    {
        path: '**',
        component: ErrorPageComponent
    }

];
