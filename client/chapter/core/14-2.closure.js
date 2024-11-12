const button = document.querySelector('button');

const handleClick = (() => {
  let clicked = false;

  return () => {
    if (!clicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }
    clicked = !clicked;
  };
})();

button.addEventListener('click', handleClick);

function useState(init) {
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [number, setNumber] = useState(10);
