const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (d) => {
  d.style.height = 0;
};

function vanilla() {
  depthList.forEach((d) => (d.style.top = header.offsetHeight + 'px'));

  function handleMouseEnter(e) {
    const currentDepth = e.currentTarget.lastElementChild;

    depthList.forEach(h);

    currentDepth.style.height = '100px';
  }

  aList.forEach((item) => {
    item.addEventListener('mouseenter', handleMouseEnter);
  });

  header.addEventListener('mouseleave', () => {
    depthList.forEach(h);
  });
}

/* global gsap */

gsap.set(depthList, { top: header.offsetHeight });

aList.forEach((a) => {
  const currentDepth = a.lastElementChild;

  const tl = gsap.timeline({ paused: true }).to(currentDepth, { height: 100 });

  a.addEventListener('mouseenter', () => tl.play());
  a.addEventListener('mouseleave', () => tl.reverse());
});
