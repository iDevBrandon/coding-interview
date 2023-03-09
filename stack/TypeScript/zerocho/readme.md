# TypeScript

## [Part1. 기본 문법편](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%98%AC%EC%9D%B8%EC%9B%90-1/dashboard)

[Handbook]<https://www.typescriptlang.org/docs/handbook/intro.html>
[zerochoh-ts](https://github.com/ZeroCho/ts-all-in-one)

### 타입스크립트를 할 때 알아야 할 단 한가지

메인 룰: ts -> js로 변환.
Tsc라는 컴파일러가 제공된다.
tsc는 옵션을 설정할수 있다.(tssconnfig.json)
타입 검사

### 노드와 VSC, 타입스크립트 설치하기

타입 검사 와 코드 변환

first.ts

Let a : string = ‘hello’;
a= 12345;

Ts 설치
Npm init -y

Npm I typescript

allowJS
Strict:true

.d.ts => 다른 라이브러리 타입 정의

### 타입스크립트는 변수, 매개변수, 리턴값에 타입 붙은것

Const a : string = ‘5’
Const b: number = 5;
Const c:boolean = true;
Count d : undefined = undefined;
Const f : any = ‘123’

Function add(x:number, y:number):number = (x,y) => x + y;

Type Add = (x:number, y:number) => number

Const arr : string[] = [‘123’, ‘456’];

Const arr3: [number,number,string] = [12,34, ‘hello’]

Interface Add() {
(x:number, y:number): number;
}

### js 변환 시 사라지느 부분을 파악하자

js로 변한할때 다 사라진다.

Let aa = 123;
Aa = ‘hello’ as unknown as number

### never타입과 느낌표(non-null assertion)

array에서는 빈 배열이면 never이란 타입이 나온다. 그래서 꼭 타입 지정!

try{
const array : string[] =[];
}

Const head = document.querySelector(‘#head’)!;

head의 타입에 null이 사라짐. 무조건 있다고 보증.

안쓰는걸 추천!

Enum, key, typeof

Const enum Direction {
Up =3;
Down =5;
Left = 4;
Right = 6;
}

Const enum ODirection {
Up =3;
Down =5;
Left = 4;
Right = 6;
} as const;

Const a = Direction.up; //

Type A = {a:string};
Const a :A = {a:’hello’}

Interface B {a:string}

간단한건 type | 객체지향을 하고 싶으면 Interface

Union 또는

Type A = string & number // 모든 속성이 다 있어야한다.
Type Animal = {breath: true}
Type mammal = Animal & {breed: true}
Type human = mammal & {think: true};

Const zerocho: Human = {breath: true, breed:true, think: true}

### 타입을 집합으로 생각하자(좁은 타입과 넓은 타입)

Type A = string | number;
Type B = string;
Type C = string & number;

Type A = {name: string}
Type B = {age: number}
Type c = {name: string, age:number}; // 상세함

### void의 두 가지 사용법

// 잉여 속성 검사

Function a():void {
return;
}

Interface Human {
talk: () => void;
}

외부에서 선언되어 있는 타입을 사용할때 declear를 사용할수 있음.

### unknown과 any

any의 문제점은 ts가 포기를 해버림.

Unknown을 사용하면, 지금 내가 type을 모를때 사용.

## [Part2. 실전 분석편](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%98%AC%EC%9D%B8%EC%9B%90-2)

## [React에 TypeScript 적용하기](https://www.inflearn.com/course/react-typescript-webgame)
