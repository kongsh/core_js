/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

// const second = document.getElementsByClassName('second')[0];
// const _second = document.querySelector('.second');

// console.log(_second.parentElement);

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// 1. nav 태그 요소
// const nav = document.querySelector('nav');
const nav = getNode('nav');

// 2. nav 태그 내부의 about li 태그 요소
// const navAbout = nav.querySelector('ul > li:nth-child(1)');
// const navAbout = nav.querySelector('.about');
const navAbout = getNode('.about', 'nav');

// 3. data-name이 contact인 li 태그 요소
// const dataNameContact = document.querySelector(`li[data-name="contact"]`);
const dataNameContact = getNode(`li[data-name="contact"]`);

// 4. nav 요소의 모든 자식 요소
// const navChilds = nav.querySelectorAll('*');
const navChilds = nav.children[0].children;

/* 문서 대상 확인 */
// - matches
// - contains
