const strings = ["a", "b", "c", "d"];
// 32 bit system, we have 1,2,3,4 shelf
// 4*4 = 16 bypes of stroage

strings[2]; // const

// push - add element in the end of array
strings.push("e");

console.log(strings); // O(1)

// pop - remove element in the end of array
strings.pop();
strings.pop(); // O(1)

// unshift - put the first
strings.unshift("x"); // O(n), we're looping over the array to put the element in the first place

// splice - put the element in the middle
strings.splice(2, 0, "alien"); // O(n/2) -> remove constanst and simplify O(n)

console.log(strings);

// static vs dynamic arrays
// statc array is that they are fixed in size
// dynamic array allows us to copy and rebuild an array at a new location with more memory than
// JS allocate memory accoding to the increase in size of the array

// 66. Implementing an array
// 1. How to build one
// 2. How to use it

// arrays in JS are just objects with integer based on keys
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data(this.length - 1);
    this.length--;
    return lastItem;
  }

  deleete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; // we're shifting the items to the left by 1
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.deleete(1);

console.log(newArray);

