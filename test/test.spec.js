/**
 * Created by fed on 2016/11/4.
 */
import fetch from '../src/fetch';

describe('Hello', function () {
  it('should works', function (done) {
    return fetch('/').then(res => {
      done();
    });
  });
});