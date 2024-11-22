const END_POINT = `https://jsonplaceholder.typicode.com/users`;

// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete  => 성공 | 실패

/* -------------------------------------------- */
/*                   callback                   */
/* -------------------------------------------- */

function xhr({
  method = 'GET',
  url = '',
  success = null,
  fail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  xhr.addEventListener('readystatechange', () => {
    const { status, response, readyState } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);
        success(data);
      } else {
        fail({ message: '실패' });
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

xhr.get = (url, success, fail) => {
  xhr({ url, success, fail });
};

xhr.post = (url, body, success, fail) => {
  xhr({
    method: 'POST',
    url,
    body,
    success,
    fail,
  });
};

xhr.put = (url, body, success, fail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    success,
    fail,
  });
};

xhr.delete = (url, success, fail) => {
  xhr({
    method: 'DELETE',
    url,
    success,
    fail,
  });
};

/* -------------------------------------------- */
/*                    promise                   */
/* -------------------------------------------- */

// mixin
const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options = {}) {
  const { method, url, errorMessage, body, headers } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: 'data 통신이 원활하지 않습니다.' });
        }
      }
    });
  });
}

// xhrPromise({
//   method: 'GET',
//   url: END_POINT,
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

xhrPromise.get = (url) => xhrPromise({ url });

xhrPromise.delete = (url) => xhrPromise({ method: 'DELETE', url });

xhrPromise.post = (url, body) => xhrPromise({ method: 'POST', url, body });

xhrPromise.put = (url, body) => xhrPromise({ method: 'PUT', url, body });

// xhrPromise
//   .get(END_POINT)
//   .then((res) => {
//     res.forEach(({ website }) => {
//       const tag = `
//       <div>site : ${website}</div>
//     `;
//       document.body.insertAdjacentHTML('beforeend', tag);
//     });
//   })
//   .then(() => {})
//   .catch(() => {});
