type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "tiger",
  age: 365,
};

function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

getProperty(person, "name");

function validCssProperty<T extends keyof CSSStyleDeclaration>(prop: T) {
  return prop in document.body.style;
}

validCssProperty("color");

const product = {
  id: 1,
  name: "mac-book",
  price: 300,
};

function setProperty<T, K extends keyof T>(product: T, key: K, value: T[K]): T {
  product[key] = value;
  return product;
}

setProperty(product, "price", 100);

const products = [
  { name: "mac", price: 500 },
  { name: "iPhone", price: 300 },
  { name: "iPad", price: 300 },
];

function getProperties<T, K extends keyof T>(products: T[], key: K): T[K][] {
  return products.map((item) => item[key]);
}

getProperties(products, "name");
