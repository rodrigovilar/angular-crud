import { Component, OnInit } from '@angular/core';


import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {

  constructor(private service: BookService) { }

  get books(): Book[] {
    return this.service.getAll();
  }
}
