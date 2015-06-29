'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('personal site', function() {
  // ---------------------------------- Testing Site Behavior ---------------------------

  it('should redirect to home when the url is invalid', function() {
    browser.get('/#/invalid-url-path');

    expect(browser.getLocationAbsUrl()).toMatch(/^\/$/);
  });

  // ---------------------------------- Testing Home ------------------------------------

  describe('home', function() {
    it('should render home.html when connecting to empty url', function() {
      browser.get('');

      expect(element(by.id('home-container')).isPresent()).toBe(true);
    });
  });

  // ---------------------------------- Testing Everything Not Home ---------------------

  describe('not-home', function() {
    it('should have a home button that takes one back to the main page', function() {
      browser.get('/#/portfolio');

      var homeButton = element(by.id('back-home'));
      expect(homeButton.isPresent()).toBe(true);

      homeButton.click();

      expect(browser.getLocationAbsUrl()).toMatch('');
    });
  });

  // ---------------------------------- Testing Portfolio -------------------------------

  describe('portfolio', function() {
    beforeEach(function() {
      browser.get('/#/portfolio');
    });

    it('should load a list of portfolio entries', function() {
      expect(browser.getLocationAbsUrl()).toMatch(/portfolio/);

      // element.all(by.css('#portfolio-entry-list li')).count().then(function(it) { console.log(it); });

      expect(element.all(by.css('#portfolio-entry-list li')).count()).toBeGreaterThan(0);
    });

    it('should link from portfolio to an entry', function() {
      element.all(by.css('#portfolio-entry-list li a')).first().click();

      // browser.getLocationAbsUrl().then(function(it) { console.log(it); });

      expect(browser.getLocationAbsUrl()).toMatch(/portfolio\/.+/);

      element(by.id('portfolio-home')).click();

      expect(browser.getLocationAbsUrl()).toMatch(/portfolio$/);
    });

    describe('entries', function() {
      it('should show information about lexos', function() {
        browser.get('/#/portfolio/lexos');

        expect(element(by.id('entry-desc')).isPresent()).toBe(true);
        expect(element(by.id('entry-link')).isPresent()).toBe(true);
        expect(element(by.id('entry-img')).isPresent()).toBe(true);
      });
    });
  });


  // ---------------------------------- Testing Resume ----------------------------------


  describe('resume', function() {
    beforeEach(function() {
      browser.get('/#/resume');
    });

    it('should load the resume page', function() {
      expect(browser.getLocationAbsUrl()).toMatch(/resume/);

      expect(element(by.id('resume-preview')).isPresent()).toBe(true);
    });
  });
});
