import { LmsAngular2Page } from './app.po';

describe('lms-angular2 App', () => {
  let page: LmsAngular2Page;

  beforeEach(() => {
    page = new LmsAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
