module.exports = function() {
    this.When(/^I visit the homepage$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        this.browser.visit('/', callback)
    });

    this.Then(/^I should see all of the "(.*)" in a multi-select box$/, function (id, callback) {
        // Write code here that turns the phrase above into concrete actions
        this.browser.on('loaded', function() {
            this.browser.assert.element('select#' + id);
        });

        callback();
    });
};
