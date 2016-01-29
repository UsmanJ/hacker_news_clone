describe('hacker news clone homepage', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Hacker News');
  });

  it('displays the top stories', function() {
    expect(element(by.className('list-group')).isDisplayed()).toBeTruthy();
  });

  it('displays 30 of the top stories', function() {
    expect(element.all(by.repeater('story in main.stories')).count()).toEqual(30)
  });

});
