import { Routes } from '@angular/router';

import { ListBooksComponent } from './book/list-books/list-books.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { ShowBookComponent } from './book/show-book/show-book.component';

export const routes: Routes = [
  { path: 'books', component: ListBooksComponent },
  { path: 'books/new', component: NewBookComponent },
  { path: 'books/:id', component: ShowBookComponent }
];
