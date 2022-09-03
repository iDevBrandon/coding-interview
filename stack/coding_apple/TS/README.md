# Coding Apple

빠르게 마스터하는 타입스크립트

## Part 1 : 꼭 알아야할 내용

## TypeScript 필수문법 10분 정리와 설치 셋팅

```ts
npm i -g typescript
```

tsconfig.json은 ts -> js컴파일시 업션설정가능

브라우저는 TS파일을 읽일수가 없다.

tsc -w (ts를 js로 자동변환됨)

let name :string[] = [“Ellie”, “Jane”]

다양한 타입이 들어올수 있게 하려면 Union type

let name : string | number = ‘Eli’;

타입은 변수에 담아쓸 수 있음 Type alias

type myType = string | number;

let number myType = ‘Eli’

function myFunc(x:number) : number { // 이 함수는 피라미터 number타입으로, return값도 number 타입으로
return x \*2
}

array에 쓸 수 있는 tuple 타입

type Member = [number, boolean]; // 무조건 첫번째는 number, 두번째는 boolean
let john: Member = []
