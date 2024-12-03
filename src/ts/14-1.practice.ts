import { Pokemon } from "./type";

const END_POINT = "https://pokeapi.co/api/v2/pokemon/3";

async function fetchdata(url: string): Promise<Pokemon> {
  const response = await fetch(url);
  return response.json();
}

function createCard(src: string, name: string): string {
  return `
    <div class="card">
      <img src="${src}" alt="">
      <h2>${name}</h2>
    </div>  
  `;
}

function renderCard(target: Element | HTMLBodyElement = document.body, src: string, name: string): void {
  target.insertAdjacentHTML("beforeend", createCard(src, name));
}

async function render() {
  const data = await fetchdata(END_POINT);

  renderCard(document.body, data.sprites["front_default"], data.name);
}

// render();

function fetchPokemon() {
  const arr: Promise<Pokemon>[] = [];

  Array(10)
    .fill(null)
    .forEach((_, i) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;

      arr.push(fetch(url).then((res) => res.json()));
    });

  return arr;
}

async function createPokemonObject(arr: Promise<Pokemon>[]) {
  let pokemon: unknown;

  await Promise.all(arr).then((all) => {
    pokemon = all.map((item) => ({
      name: item.name,
      image: item.sprites["front_default"],
    }));
  });

  return pokemon;
}

async function renderPokemon() {
  const data = fetchPokemon();

  const p = await createPokemonObject(data);

  if (Array.isArray(p)) {
    const tag = p
      .map(
        (item) =>
          `<li class="card">
          <img src="${item.image}" alt="">
          <h2>${item.name}</h2>
        </li>`
      )
      .join("");

    (document.querySelector("ul") as Element).insertAdjacentHTML("beforeend", tag);
  }
}

renderPokemon();
