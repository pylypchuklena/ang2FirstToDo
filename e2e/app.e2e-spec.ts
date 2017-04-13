import { LessonsPage } from './app.po';

describe('lessons App', function() {
  let page: LessonsPage;

  beforeEach(() => {
    page = new LessonsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
