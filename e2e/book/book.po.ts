import { browser, element, by } from 'protractor';
import {AbstractPage} from '../abstract.po';

export class BookPage extends AbstractPage {

  fillForm(name: string, author: string) {
    element(by.id('book_name')).sendKeys(name);
    element(by.id('book_author')).sendKeys(author);
  }

  getCellText(line: number, column: number) {
    return element(by.xpath('//tr[' + line + ']/td[' + column + ']')).getText();
  }

  checkLine(line: number, name: string, author: string) {
    expect(this.getCellText(line, 1)).toBe(name);
    expect(this.getCellText(line, 2)).toBe(author);
    expect(this.getCellText(line, 3)).toBe('Show');
    expect(this.getCellText(line, 4)).toBe('Edit');
    expect(this.getCellText(line, 5)).toBe('Destroy');

  }
}
