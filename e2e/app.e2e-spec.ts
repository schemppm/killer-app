import { AppPage } from './app.po';

describe('KillerApp', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should: show HeaderText', () => {
        page.navigateTo();
        const headerText = page.getHeaderText();
        expect(headerText).toEqual('Welcome to Camp Crystal Lake aka "The Killer-App"');
    });

    it('should: change killer', () => {
        page.navigateTo();
        page.getFreddyButton().click();
        expect(page.getKillerText()).toEqual('Your current killer is: Freddy Krueger');
    });
});
