// STACK
// const stack = [];

// push
stack.push("dog");
stack.push("cat");
stack.push("bear");

// pop
stack.pop(); // ['dog', 'cat']

// peek - peek isn't a JS method
stack[stack.length - 1]; // 'cat

// implemented in JS class
class stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  peek() {
    return this.storage[this.size];
  }
}

const stack = new Stack();
stack.push("dog");

// class Stack {
//   constructor() {
//     this.items = [];
//     this.count = 0;
//   }

//   // Add element to top of stack
//   push(element) {
//     this.items[this.count] = element;
//     console.log(`${element} added to ${this.count}`);
//     this.count++;
//     return this.count - 1;
//   }

//   // Return and remove top element in stack
//   // Return undefined if stack is empty
//   pop() {
//     if (this.count === 0) return undefined;
//     let deleteItem = this.items[this.count - 1];
//     this.count--;
//     console.log(`${deleteItem} removed`);
//     return deleteItem;
//   }

//   // check top element in stack
//   peek() {
//     console.log(`Top element is ${this.items[this.count - 1]}`);
//     return this.items[this.count - 1];
//   }

//   // check if stack is empty
//   isEmpty() {
//     console.log(this.count == 0 ? "Stack is empty" : "Stack is NOT empty");
//     return this.count === 0;
//   }

//   // check size of stack
//   size() {
//     console.log(`${this.count} element in stack`);
//     return this.count;
//   }

//   print() {
//     let str = "";
//     for (let i = 0; i < this.count; i++) {
//       str += this.items[i] + " ";
//     }
//     return str;
//   }

//   // clear stack
//   clear() {
//     this.items = [];
//     this.count = 0;
//     console.log("Stack cleared");
//     return this.items;
//   }
// }

// const stack = new Stack();

// stack.isEmpty();
// stack.push(100);
// stack.push(200);
// stack.peek();
// stack.push(300);

// stack.pop(); // remove 300
// stack.pop(); // remove 200
// stack.pop(); // remove 100

// stack.size();
// console.log(stack.pop()); // undefined
