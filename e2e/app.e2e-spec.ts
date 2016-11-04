import { Angular2Sub1PocPage } from './app.po';

describe('angular2-sub1-poc App', function() {
  let page: Angular2Sub1PocPage;

  beforeEach(() => {
    page = new Angular2Sub1PocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
