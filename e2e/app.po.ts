import { browser, by, element } from 'protractor';
export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getHeaderText() {
        return element(by.css('.killerApp h1')).getText();
    }

    getFreddyButton() {
        return element(by.css('.freddyButton'));
    }

    getKillerText() {
        return element(by.css('.currentKillerText')).getText();
    }
}
