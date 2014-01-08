(function () {
  var buttonElement;
  var iframeHandler;

  beforeEach(function (done) {
    iframeHandler = harnessUtils.createIframe('test/html/test.html', function (win, doc) {
      buttonElement = iframeHandler.document.querySelector('ceci-textbox');
      done();
    });
  });

  describe('Ceci Button', function () {
    test('Sanity check', function (done) {
      chai.assert(buttonElement.ceci, 'Ceci descriptor exists.');
      iframeHandler.runIframeTest('Sanity Check', done);
    });

    test('Listeners', function (done) {
      iframeHandler.testListeners(buttonElement, done, {
        check: {
          setValue: function (e, channel) {
            chai.assert(true);
          }
        }
      });
    });
  });
})();
