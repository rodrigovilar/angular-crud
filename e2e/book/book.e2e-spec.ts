///<reference path="../abstract.po.ts"/>
///<reference path="book.po.ts"/>
import { CrudAppPage } from '../app.po';
import { BookPage } from './book.po';
import {browser} from 'protractor';

describe('Book', () => {
  let page: BookPage;

  beforeEach(() => {
    page = new BookPage();
  });

  it('should create and list a book', () => {
    page.navigateToBookListing();

    page.clickLink(`New Book`);
    page.fillForm('Book name 1', 'Author 1');
    page.clickButton(`Create Book`);

    expect(page.getSubHeaderText()).toContain(`list-books works!`);
    page.checkLine(1, 'Book name 1', 'Author 1');
  });

  it('should click, show a book and go back to listing', () => {
    page.show(1);
    page.checkShow('Book name 1', 'Author 1');
    page.clickLink(`Back`);

    expect(page.getSubHeaderText()).toContain(`list-books works!`);
    page.checkLine(1, 'Book name 1', 'Author 1');
  });

});
