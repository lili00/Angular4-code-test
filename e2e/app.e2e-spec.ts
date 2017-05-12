import { VisaAppPage } from './app.po';

describe('visa-app App', () => {
  let page: VisaAppPage;

  beforeEach(() => {
    page = new VisaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
