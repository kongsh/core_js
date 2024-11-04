function getValueAtObject(object, key) {
  // if (!(Object.prototype.toString.call(object).slice(8, -1).toLowerCase() ==='object'))
  if (!(typeof object === 'object')) {
    throw new TypeError(
      'getValueAtObject 함수의 첫 번째 인수는 객체 타입이어야 합니다.'
    );
  }

  if (typeof key !== 'string') {
    throw new TypeError(
      'getValueAtObject 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }

  if (!(key in object)) {
    throw new SyntaxError('해당 객체에는 key값이 존재하지 않습니다.');
  }

  return object[key];
}

// console.log(getValueAtObject([], 'name'));

// function _getValueAtObject(object, key) {
//   const entries = Object.entries(object);
//   let value;

//   // for (let [k,v] of entries) if (k === key) return v;

//   entries.forEach(([k,v])=>{k===key ? value = v : '';})

// }

// console.log(_getValueAtObject(obj, 'name'));

function getNumberAtArray(array, index) {
  if (!Array.isArray(array)) {
    throw new Error(
      'getNumberAtArray 함수의 첫 번째 인수는 배열 타입이어야 합니다'
    );
  }

  if (index >= 0 && index < array.length) {
    return array[index];
  } else {
    throw new Error('...');
  }
}
