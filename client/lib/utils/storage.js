const { localStorage: storage } = window;

// storage.setItem('user', JSON.stringify({ name: 'tiger', age: 40 }));

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (typeof key === 'string') {
      storage.setItem(key, JSON.stringify(value));
      resolve(true);
    } else {
      reject({
        message: 'setStorage함수의 첫 번째 인수는 문자 타입 이어야 합니다.',
      });
    }
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (typeof key === 'string') {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({
        message: 'getStorage함수의 첫 번째 인수는 문자 타입 이어야 합니다.',
      });
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}

export function setCookieValue(name, value, days, path = '/') {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=${encodeURIComponent(path)}`;

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    cookieString += `;expires=${date.toUTCString()}`;
  }

  document.cookie = cookieString;
}

export function getCookieValue(name) {
  const value = `;${document.cookie}`;
  const parts = value.split(`; ${encodeURIComponent(name)}=`);
  if (parts.length === 2)
    return decodeURIComponent(parts.pop().split(';').shift());
  return null;
}
