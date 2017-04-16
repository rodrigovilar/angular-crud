import { browser, element, by } from 'protractor';
import {AbstractPage} from  './abstract.po';

export class CrudAppPage extends AbstractPage {

  getHeaderText() {
    return element(by.css(`h1`)).getText();
  }

}
