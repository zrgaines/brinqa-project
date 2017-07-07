import { BrinqaProjectPage } from './app.po';

describe('brinqa-project App', () => {
  let page: BrinqaProjectPage;

  beforeEach(() => {
    page = new BrinqaProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
