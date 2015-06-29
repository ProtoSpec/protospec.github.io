'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('personal site', function() {
  it('should render home.html when connecting to base site', function() {
    browser.get('/');
    var test = element.all(by.css('[ng-scope] #home-container')).first().getText();

    console.log('test:', test);

    expect(test)
      .not.toBe(null);
  })


  // it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
  //   browser.get('/');
  //   expect(browser.getLocationAbsUrl()).toMatch("/view1");
  // });


  // describe('view1', function() {

  //   beforeEach(function() {
  //     browser.get('index.html#/view1');
  //   });


  //   it('should render view1 when user navigates to /view1', function() {
  //     expect(element.all(by.css('[ng-view] p')).first().getText()).
  //       toMatch(/partial for view 1/);
  //   });

  // });


  // describe('view2', function() {

  //   beforeEach(function() {
  //     browser.get('index.html#/view2');
  //   });


  //   it('should render view2 when user navigates to /view2', function() {
  //     expect(element.all(by.css('[ng-view] p')).first().getText()).
  //       toMatch(/partial for view 2/);
  //   });

  // });
});
