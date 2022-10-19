# [React Query](youtube.com/watch?v=MArE6Hy371c)

## 상태관리 라이브러리 : 리덕스, MobX

## 상태란?

주어진 시간에 대해 시스템을 나타내는 것으로 언제든지 변경될 수 있음.

## 상태관리는?

상태를 관리하는 방법에 대한 것 -> 프로덕트가 커짐에 따라 어려움도 커짐
React에선 단방향 바인딩이므로 props drilling 이슈도 존재

## 주문 FE 프로덕트를 보며 가진 고민

배민앱에선 전부 웹뷰로 관리중.

- Store에 상태관련 코드보다 API 통신관련 코드가 더 많다

fetchOrderRequest, fetchOrderSuccess, fetchOrderFailure

## 상태관리 코드? vs API 통신 코드?

Store는 전역 상태가 저장되고 관리되는 공간인데..

RTK를 써도 api 호출/대기중/응답으로 나뉘는 액션들을 정의하는게 번잡스러움.

## 서버에서 받아야하는 상태들의 특성

- Client에서 제어하거나 서유되지 않은 원격의 공간에서 관리되고 유지됨.
- Fetching이나 Updating에 비동기 API가 필요함
- 다른 사람들과 공유된는 것으로 사용자가 모르는 사이에 변경될 수 있음.
- 신경 쓰지 않는다면 잠재적으로 "out of date"가 될 가능성을 지님

=> 사실상 FE에서 이 값들이 저장되어있는 state들은 일종의 캐시

Client에서 관리하는 일반적인 상태들의 특성과는 다르죠?
어쩌면 다른 관리방법이 있다면 좋을지도?

## 상태를 2 가지로 나누어 봅시다.

## Client state vs Server state

Key Point는 데이터의 Ownership이 있는 곳.

### Client State (Ownership이 Client에)

- Client에서 소유하며 온전히 제어가능함
- 초기값 설정이나 조작에 제약사항 없음
- 다른 사람들과 공유되지 않으며, Client내에서 UI/UX 흐름이나 사용자 인터렉션에 따라 변할 수 있음.
- 항상 Client 내에서 최신 상태로 관리됨.

### Server State (Ownership이 Server에)

- Client에서 제어하거나 소유되지 않은 원격의 공간에서 관리되고 유지됨
- Fetching/Updating에 비동기 API가 필요함
- 다른 사람들과 공유되는 것으로 사용자가 모르는 사이에 변경될 수 있음
- 신경 쓰지 않는다면 잠재적으로 "out of date"가 될 가능성을 지님.

Redux/MobX/Recoil => React Query 선택하게됨.

## React Query 살펴보기

## React Query 자기소개

Fetch, cache and update data in your React and RN applications all without touching any "global state".

## Overview

React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.

Server State = 데이터 가져오기 + 캐시 + 동기화 + 데이터 업데이트

## 3 가지 core 컨셉 살펴보기

공식 문서 Quick Start에서 짚은 3가지 개념

Queries / Mutations / Query Invalidation

## Queries

보통 GET으로 받아올 대부분의 API에 사용함.

- A query is a declarative dependency on an asynchronous source of data that is tied to a unique key.
- A query can be used with any Promise based method(including GET and POST mewthods) to fetch data from a server.
- If your method modifies data on the server, we recommend using Mutations instead.

=> CRUD중 Read에만 사용할 거에요. Queries는 데이터 fetching용도!

```js
import { useQuery } from "react-query";

function App() {
  const info = useQuery("todos" : queryKey, fetchTodoList : QueryFn); // 1st param : Query Key & 2nd param : Query Function
}
```

## Reference

https://tkdodo.eu/blog/practical-react-query
https://parang.gatsbyjs.io/react/2022-react-01/