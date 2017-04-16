import { CrudAppPage } from './app.po';

describe('crud-app App', () => {
  let page: CrudAppPage;

  beforeEach(() => {
    page = new CrudAppPage();
  });

  it('should provide CRUD routes', () => {
    page.navigateToBookListing();
    expect(page.getHeaderText()).toContain(`app works!`);
    expect(page.getSubHeaderText()).toContain(`list-books works!`);

    page.clickLink(`New Book`);
    expect(page.getSubHeaderText()).toContain(`new-book works!`);

    page.clickLink(`Back`);
    expect(page.getSubHeaderText()).toContain(`list-books works!`);
  });

});
