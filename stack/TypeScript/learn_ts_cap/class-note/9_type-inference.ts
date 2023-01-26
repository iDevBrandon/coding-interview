// 타입 추론 1 기본
let a;

function getB(b = 10) {
  let c = "hi";
  return b;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}

let shoppingItem: Dropdown<string> = {
  value: "abc",
  title: "he",
};

// 타입 추론 기본 3
interface Dropup<T> {
  value: T;
  title: string;
}

interface DetailedDropup<K> extends Dropup<K> {
  description: string;
  tag: K;
}

let detailedItem: DetailedDropup<string> = {
  description: "hy",
  title: "Detail",
  value: "j",
  tag: "g",
};

// Best common Type
let arr = [1, 2, true, "a"];
