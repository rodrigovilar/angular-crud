import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable()
export class BookService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for book's
  books: Book[] = [];

  constructor() {
//    this.add(new Book('Name 1', 'Author 1'));
//    this.add(new Book('Name 2', 'Author 2'));
  }

  // Simulate POST /books
  add(book: Book) {
    if (!book.id) {
      book.id = ++this.lastId;
    }
    this.books.push(book);
  }

  // Simulate DELETE /books/:id
  delete(id: number) {
    this.books = this.books
      .filter(todo => todo.id !== id);
  }

  // Simulate PUT /books/:id
  update(newBook: Book): Book {
    const oldBook = this.getById(newBook.id);
    if (!oldBook) {
      return;
    }
    Object.assign(oldBook, newBook);
    return oldBook;
  }

  // Simulate GET /books
  getAll(): Book[] {
    return this.books;
  }

  // Simulate GET /books/:id
  getById(id: number): Book {
    return this.books
      .filter(todo => todo.id === id)
      .pop();
  }
}
