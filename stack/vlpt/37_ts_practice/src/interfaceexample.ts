// Type Alias(엘리어스, 별칭을 지어주는것) 사용하기

type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "John",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["아무거나", "아무거나2"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const colors: Color = "orange";
