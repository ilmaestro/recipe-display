import { CLIProjectTestPage } from './app.po';

describe('cliproject-test App', () => {
  let page: CLIProjectTestPage;

  beforeEach(() => {
    page = new CLIProjectTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
