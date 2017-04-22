import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  public book: Book;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService) {}

  onSubmit(form: any) {
    this.book.name = form.name;
    this.book.author = form.author;
    this.bookService.update(this.book);
    this.router.navigate(['/books']);
  }

  ngOnInit() {
    this.route.params
      .switchMap( (params: Params) => this.loadBook(+params['id']) )
      .subscribe( (book: Book) => this.book = book );
  }

  loadBook(id: number): Promise<Book> {
    return new Promise( (resolve) => resolve(this.bookService.getById(id)) );
  }
}
