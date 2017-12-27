import { MuddEPawsPage } from './app.po';

describe('mudd-e-paws App', () => {
  let page: MuddEPawsPage;

  beforeEach(() => {
    page = new MuddEPawsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
