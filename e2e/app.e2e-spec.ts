import { A4ComponentsPage } from './app.po';

describe('a4-components App', () => {
  let page: A4ComponentsPage;

  beforeEach(() => {
    page = new A4ComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
