/**
 * Created by fed on 2016/11/4.
 */
function mockFactory(config) {
  const mockUrl = config.mockUriStart || '/mock-api/';
  return function (req, res, next) {
    if (req.url.indexOf(mockUrl) === 0) {
      const path = req.url.slice(mockUrl.length);
      try {
        const processor = require(`./processors/${path}`);
        processor(req, res);
      }
      catch (e) {
        next();
      }
    }
    else {
      next();
    }
  };
};

module.exports = {
  'middleware:mock': ['factory', mockFactory]
};
