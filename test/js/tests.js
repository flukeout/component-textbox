(function () {
  var textBoxElement;
  var iframeHandler;

  beforeEach(function (done) {
    iframeHandler = harnessUtils.createIframe('test/html/test.html', function (win, doc) {
      textBoxElement = iframeHandler.document.querySelector('ceci-textbox');
      done();
    });
  });

  describe('Ceci Text Box', function () {
    test('Sanity check', function (done) {
      chai.assert(textBoxElement.ceci, 'Ceci descriptor exists.');
      iframeHandler.runIframeTest('Sanity Check', done);
    });

    test('Listeners', function (done) {
      iframeHandler.testListeners(textBoxElement, done, {
        check: {
          setValue: function (e, channel) {
            chai.assert(true);
          }
        }
      });
    });
  });
})();
