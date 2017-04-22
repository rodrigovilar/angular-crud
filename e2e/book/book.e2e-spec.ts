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

    page.checkShow('Book name 1', 'Author 1');
    page.clickLink(`Back`);

    expect(page.getHeaderText()).toContain(`Books`);
    page.checkLine(1, 'Book name 1', 'Author 1');
  });

  it('should click, show a book and go back to listing', () => {
    page.show(1);
    page.checkShow('Book name 1', 'Author 1');
    page.clickLink(`Back`);
  });

  it ('should edit, show and list a book ', () => {
    page.edit(1);
    page.fillForm('Book name 2', 'Author 2');
    page.clickButton(`Update Book`);
    page.checkShow('Book name 2', 'Author 2');
    page.clickLink(`Back`);

    page.checkLine(1, 'Book name 2', 'Author 2');

    page.show(1);
    page.checkShow('Book name 2', 'Author 2');
    page.clickLink(`Back`);
  });

});
