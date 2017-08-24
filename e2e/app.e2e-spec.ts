import { RposPage } from './app.po';

describe('rpos App', () => {
  let page: RposPage;

  beforeEach(() => {
    page = new RposPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
