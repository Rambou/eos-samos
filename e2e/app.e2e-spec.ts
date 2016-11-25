import { EosSamosPage } from './app.po';

describe('eos-samos App', function() {
  let page: EosSamosPage;

  beforeEach(() => {
    page = new EosSamosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
