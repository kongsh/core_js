import { LitElement, html } from "lit";

class TodoList extends LitElement {
  static properties = {
    _listItems: { state: true },
  };

  constructor() {
    super();

    this._listItems = [
      { text: "책읽기", completed: true },
      { text: "영화보기", completed: false },
      { text: "운동하기", completed: true },
    ];
  }

  get input() {
    return this.renderRoot.querySelector(".newItem") ?? null;
  }

  addTodoItem() {
    this._listItems = [...this._listItems, { text: this.input.value, complete: false }];
  }

  render() {
    return html`
      <h2>To Do List</h2>
      <ul>
        ${this._listItems.map((item) => html`<li>${item.text}</li>`)}
      </ul>
      <label id="newItem">
        <input class="newItem" type="text" id="newItem" aria-label="새로운 아이템" />
      </label>
      <button @click=${this.addTodoItem} type="button">추가</button>
    `;
  }
}

customElements.define("todo-list", TodoList);

app.append(document.createElement("todo-list"));
