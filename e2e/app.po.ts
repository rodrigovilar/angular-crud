import { browser, element, by } from 'protractor';

export class CrudAppPage {
  navigateToBookListing() {
    return browser.get('/books');
  }

  getHeaderText() {
    return element(by.css(`h1`)).getText();
  }
}
