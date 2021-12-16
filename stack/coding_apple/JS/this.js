var 사람 = {
  name: "손흥민",
  sayHi: function () {
    console.log(`안녕 나는 ${this.name}`);
  },
};

사람.sayHi(); //안녕 나는 손흥민

var 자료 = {
  data: [1, 2, 3, 4, 5],
};

자료.전부더하기 = function (x) {
  return this.data.reducer((acc, cur) => acc + cur, x);
};
자료.전부더하기();

<button id="버튼">버튼이에요</button>;

document.getElementById("버튼").addEventListener("click", function () {
  setTimeout(() => (this.innerHTML), 1000);
});
