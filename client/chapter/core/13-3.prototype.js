class Todo {
  constructor({ input, button, renderPlace }) {
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);

    this.todoListArray = [];

    this.attachEvent();
  }

  get currentInputTodoData() {
    return this.input.value;
  }

  set currentInputTodoData(value) {
    this.input.value = value;
  }

  // 버튼에 이벤트 등록, input 값이 콘솔창에 나오도록

  addTodoData() {
    this.todoListArray.push(this.currentInputTodoData);
    console.log(this.todoListArray);
  }

  createTag() {
    return `<li>${this.currentInputTodoData}</li>`;
  }

  #render() {
    this.renderPlace.insertAdjacentHTML('beforeend', this.createTag());
    this.input.value = '';
    // this.currentInputTodoData
  }

  handleClick() {
    console.log(this.currentInputTodoData);
    this.#render();
  }

  attachEvent() {
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.addTodoData();
      this.handleClick();
    });
  }
}

const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todoList',
});

const todo2 = new Todo({
  input: '.todo2',
  button: '.btn2',
  renderPlace: '.todoList2',
});
