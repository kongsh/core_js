type User = {
  id: number;
  name: string;
  email: string;
};

type PublicUser = Omit<User, "email">;

const user: PublicUser = {
  id: 1,
  name: "tiger",
};

const user2: Pick<User, "id" | "name"> = {
  id: 2,
  name: "beom",
};

type Address = {
  lat: number;
  long: number;
};

type User3 = {
  id: number;
  name?: string;
  email?: string;
  address: Address;
};

const user3: Partial<User3> = {
  name: "beom",
};

type User4 = {
  id: number;
  name: string;
  email: string;
};

const user4: Readonly<User4> = {
  id: 1,
  name: "tiger",
  email: "tiger@dqw.com",
};

const User5: Required<User3> = {
  id: 1,
  name: "asd",
  email: "qwe",
  address: {
    lat: 20,
    long: 213,
  },
};

type ShallowPartial<T> = {
  [K in keyof T]?: T[K];
};

const user6: ShallowPartial<User3> = {
  name: "tiger",
  address: {
    lat: 20,
    long: 231,
  },
};
