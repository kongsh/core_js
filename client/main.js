import {
  tiger,
  delayP,
  getNode,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

// const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const END_POINT = 'http://localhost:3000/users';

const userCardInner = getNode('.user-card-inner');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');
const create = getNode('.create');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    const response = await tiger.get(END_POINT);

    gsap.to('.loadingSpinner', {
      opacity: 0,
      oncomplete() {
        this._targets[0].remove();
      },
    });

    let data = response.data;

    await delayP(1000);

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 'start',
      },
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
    console.log(err);
  }
}

renderUserList();

function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const article = button.parentElement;
  const index = article.dataset.index.slice(5);

  tiger.delete(`${END_POINT}/${index}`).then(() => {
    alert('삭제가 완료됐습니다.');
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDeleteCard);

function handleCreate() {
  this.classList.add('open');
}

function handleCancel(e) {
  e.stopPropagation();

  create.classList.remove('open');
}

function handleDone(e) {
  e.preventDefault();

  const inputs = this.closest('form').querySelectorAll('input');
  const [username, email, website] = [...inputs].map((input) => input.value);

  tiger.post(END_POINT, { username, email, website }).then(() => {
    create.classList.remove('open');
    clearContents(userCardInner);
    renderUserList();

    [...inputs].forEach((item) => (item.value = ''));
  });
}

create.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
