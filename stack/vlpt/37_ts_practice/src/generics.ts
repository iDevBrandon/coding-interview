function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);

// 타입이 지켜지면서 wrapper 뒤에 추정할수 있음. any를 가져온거마냥

// interface 에서 Generics 사용하기
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b", "c"],
};

// type 에서 Generics 사용하기
type Items2<T> = {
  list: T[];
};

const items2: Items2<number> = {
  list: [1, 2, 3],
};

// type alias나 interface에서 사용할때, 내부의 타입을 지켜주고 싶을땐,
// any를 사용하고 싶지 않을 때!

// 클래스에서 Generics 사용하기
// Queue example

class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqeue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqeue(0);
queue.enqeue(1);
queue.enqeue(2);
queue.enqeue(3);
queue.enqeue(4);

while (queue.length > 0) {
  console.log(queue.dequeue());
}
