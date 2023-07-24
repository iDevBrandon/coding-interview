let variable = "hello";

let testStringOrNumber: string | number; // union type

let names = ["john", "jane", "doe"];

let testStringArray: string[];

testStringArray = ["john", "jane", "doe"];

let user = {
  username: "john",
  age: 22,
  isAdmin: false,
};

// Partial practice

interface Profile {
  name: string;
  age: number;
  married: boolean;
}

// type P<T, S extends keyof T> = {
//   [Key in S]: T[Key];
// };

// const zerocho: P<Profile, "name" | "age"> = {
//   name: "zerocho",
//   age: 30,
// };

type R<T> ={
  [Key in keyof T]-?: T[Key]
}

const zerocho : R<Profile> = {
  name: "zerocho",
  age: 30,
  married: false,
}