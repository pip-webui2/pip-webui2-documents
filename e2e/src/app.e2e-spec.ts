import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display "Document list" in appbar', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Document list');
  });
});
