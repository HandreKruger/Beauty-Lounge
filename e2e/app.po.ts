import { browser, element, by } from 'protractor';

export class BeautyloungePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bl-root h1')).getText();
  }
}
