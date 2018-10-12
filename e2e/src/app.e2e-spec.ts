import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to pokemon!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to app!');
>>>>>>> ef17b40744a08fd3cabb9b2aa151ec2bae3132a4
  });
});
