import { BeautyloungePage } from './app.po';

describe('beautylounge App', function() {
  let page: BeautyloungePage;

  beforeEach(() => {
    page = new BeautyloungePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bl works!');
  });
});
