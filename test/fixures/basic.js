/**
 * Created by fed on 2016/11/4.
 */
import fetch from '../../src/fetch';

describe('basic fetch', () => {
  it('should works', (done) => {
    fetch('/ma/simple').then(res => {
      console.log(res);
      done(res);
    })
  });
});