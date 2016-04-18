var zombie = require('zombie');
function World() {
  zombie.localhost('localhost', 5000);
//  zombie.localhost('themuse.dev');
  this.browser = new zombie({ waitDuration: 30*1000 }); // this.browser will be available in step definitions

  this.waitForPage = function(callback) {
    // Wait until page is loaded
    function pageLoaded(window) {
      return window.document.querySelector(".container-fluid");
    }

    browser.wait(pageLoaded, function() {
      callback();
    });
  };
}

module.exports = function() {
  this.World = World;
};
