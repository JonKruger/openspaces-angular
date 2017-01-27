import { NgOpenspacesPage } from './app.po';

describe('ng-openspaces App', function() {
  let page: NgOpenspacesPage;

  beforeEach(() => {
    page = new NgOpenspacesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
