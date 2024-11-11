/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  legs = 4; // public class field, 이 클래스에 무조건 들어가야 하는 것
  tail = true;
  #name = 'unknown';

  constructor(name) {
    // 런타임동안 설정됨, 변수를 받아서 재할당 가능
    this.#name = name;
    this.stomach = [];
    console.log(this.#name);
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

class Tiger extends Animal {
  static options = {};

  constructor(name) {
    super(name);
    this.pattern = '호랑이무늬';
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  static bark(sound) {
    return sound + '🦁';
  }
}

// const a = new Animal('몽실이');
const 호랑이 = new Tiger('호돌이');

class Button {
  constructor(selector) {
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
  }

  createTag() {
    return `<div>${++this.count + 'clicked'}</div>`;
  }

  #render() {
    // 옛날에는 밖에서 쓰지 않고 이 클래스 내부에서만 쓰겠다는 의미로 '_'를 앞에 붙임
    document.body.insertAdjacentHTML('beforeend', this.createTag());
  }

  handleClick() {
    this.#render();
  }

  attachEvent() {
    // this.button.addEventListener('click', () => this.handleClick());
    this.button.addEventListener('click', this.handleClick.bind(this));
  }
}

const button = new Button('.btn');

// const _button = document.querySelector('.btn');

// let count = 0;

// function createTag() {
//   return `
//     <div>${++count + 'clicked'}</div>
//   `;
// }

// function render(data) {
//   document.body.insertAdjacentHTML('beforeend', data);
// }

// function handleClick() {
//   // console.log(++count + 'clicked!');
//   render(createTag());
// }

// _button.addEventListener('click', handleClick);

// class User {
//   #pw;
//   constructor(userId, userPw) {
//     this.id = userId;
//     this.#pw = this.hashPassword(userPw);
//   }

//   hashPassword(pw) {
//     return 'hashCODE' + pw + 'salt';
//   }
// }

// const user = new User('tiger', 'hello123');
