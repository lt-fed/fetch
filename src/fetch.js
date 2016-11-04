/**
 * Created by fed on 2016/11/4.
 */
import Promise from 'promise';

export default function fetch(url, options) {
  return new Promise(function (resolve) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve({
          status: xhr.status,
          response: xhr.response,
        });
      }
    };
    xhr.send(null);
  });
}
