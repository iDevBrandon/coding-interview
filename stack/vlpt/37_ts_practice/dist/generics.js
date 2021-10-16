"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 2 });
function wrap(param) {
    return {
        param: param,
    };
}
var wrapped = wrap(10);
var items = {
    list: ["a", "b", "c"],
};
var items2 = {
    list: [1, 2, 3],
};
// type alias나 interface에서 사용할때, 내부의 타입을 지켜주고 싶을땐,
// any를 사용하고 싶지 않을 때!
// 클래스에서 Generics 사용하기
// Queue example
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqeue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqeue(0);
queue.enqeue(1);
queue.enqeue(2);
queue.enqeue(3);
queue.enqeue(4);
while (queue.length > 0) {
    console.log(queue.dequeue());
}
