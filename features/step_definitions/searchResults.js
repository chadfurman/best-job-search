module.exports = function() {
  this.When(/^I click the search button$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    this.browser.click('#search-button', callback);
  });

  this.Then(/^I should see search results$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    this.browser.assert.element('.results');
    callback();
  });

  this.Then(/^the search results should have a name$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    this.browser.assert.elements('.results .job .name', {atLeast: 1})
    callback();
  });

  this.Then(/^the title of the search results should be a link$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    this.browser.assert.elements('.results .job .name a', {atLeast: 1})
    callback();
  });
};

