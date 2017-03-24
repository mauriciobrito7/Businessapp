import { BusinessappPage } from './app.po';

describe('businessapp App', () => {
  let page: BusinessappPage;

  beforeEach(() => {
    page = new BusinessappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
