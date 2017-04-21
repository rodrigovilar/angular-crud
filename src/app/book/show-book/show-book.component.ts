import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  public book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.mapIdParam(+params['id']))
      .subscribe(
        (book: Book) => {
          this.book = book;
        });
  }

  mapIdParam(id: number): Promise<Book> {
    return new Promise((resolve) => {
      const book: Book = this.bookService.getById(id);
      resolve(book);
    });
  }
}
