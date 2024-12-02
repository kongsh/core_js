const user1: {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
} = {
  id: 1,
  name: "tiger",
  auth: "admin",
  isPaid: true,
};
// type interface

type User = {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
};

const user2: User = {
  id: 2,
  name: "tiger",
  auth: "admin",
  isPaid: true,
};

interface _User {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

const user3: _User = {
  id: 2,
  name: "tiger",
  auth: "admin",
  isPaid: true,
};

/* index signature */

type Person = {
  name: string;
  age: number;
  [key: string]: string | number;
};

const person: Person = {
  name: "beom",
  age: 3,
  email: "qjaqja@daum.net",
  address: "주소지",
  phone: "02103210322",
};
