import { browser, element, by } from 'protractor';

export class AbstractPage {

  navigateToBookListing() {
    browser.get('/books');
    browser.waitForAngular('Waiting for Angular after opening Book listing.');

  }

  getSubHeaderText() {
    return element(by.css(`h2`)).getText();
  }

  clickLink(linkText: string) {
    element(by.linkText(linkText)).click();
    browser.waitForAngular('Waiting for Angular after clicking on Link: ' + linkText);
  }

  clickButton(buttonText: string) {
    element(by.buttonText(buttonText)).click();
    browser.waitForAngular('Waiting for Angular after clicking on Button: ' + buttonText);
  }

}
