import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { BookService } from './book/book.service';
import { ListBooksComponent } from './book/list-books/list-books.component';

import { routes } from './routes';
import { NewBookComponent } from './book/new-book/new-book.component';
import { ShowBookComponent } from './book/show-book/show-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    NewBookComponent,
    ShowBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
