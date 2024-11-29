import { LitElement, html } from "lit";

class NameTag extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();

    this.name = "what's your name?";
  }

  handleInput(e) {
    this.name = e.target.value;
  }

  handleclick() {
    alert(this.name);
  }

  render() {
    return html`
      <p>hello, ${this.name}</p>
      <input @input=${this.handleInput} type="text" placeholder="이름을 입력해주세요" />
      <button @click=${this.handleclick} type="button">click me</button>
    `;
  }
}

customElements.define("name-tag", NameTag);

app.append(document.createElement("name-tag"));
