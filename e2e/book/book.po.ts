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

  show(line: number) {
    element(by.xpath('//tr[' + line + ']/td[' + 3 + ']/a')).click();
  }

  checkShow(name: string, author: string) {
    this.checkShowLabelText(1, 'Name:');
    this.checkShowValueText(1, `Name: ${name}`);
    this.checkShowLabelText(2, 'Author:');
    this.checkShowValueText(2, `Author: ${author}`);
  }

  checkShowLabelText(line: number, label) {
    expect(this.getShowLabelText(line)).toBe(label, `Show label ${line} is not ${label}`);
  }

  checkShowValueText(line: number, value) {
    expect(this.getShowValueText(line)).toBe(value, `Show value ${line} is not ${value}`);
  }

  getShowLabelText(line: number) {
    return element(by.xpath('//div/p[' + line + ']/strong')).getText();
  }

  getShowValueText(line: number) {
    return element(by.xpath('//div/p[' + line + ']')).getText();
  }
}
