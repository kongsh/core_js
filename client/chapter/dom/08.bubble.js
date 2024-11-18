/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', function (e) {
  // console.log('%c section', 'color:dodgerblue');

  console.log(e.target);
});

// article.addEventListener('click', () => {
//   console.log('%c section', 'color:hotpink');
// });

// p.addEventListener('click', () => {
//   console.log('%c section', 'color:orange');
// });

/* 캡처링 ----------------------------------------------------------------- */
