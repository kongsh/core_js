import {
  tiger,
  delayP,
  getNode,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const userCardInner = getNode('.user-card-inner');

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
        amount: 1,
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
  });
}

userCardInner.addEventListener('click', handleDeleteCard);
