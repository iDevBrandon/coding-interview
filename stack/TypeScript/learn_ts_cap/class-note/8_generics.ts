// 인터페이스에 제네릭을 선언하는 방법

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const object: Dropdown<string> = {
  value: "hey",
  selected: true,
};

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getItemOptions<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getItemOptions("name")