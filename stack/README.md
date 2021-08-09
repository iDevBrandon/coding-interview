# FE Interview questions

## General(Frontend Stack)

- DOCTYPE 이 무엇인가?
  DOCTYPE은 문서 종류를 선언하는 태그, 어떤 버전의 HTML을 사용할 것인지 브라우저에게 알려줌. <!DOCTYPE html>

  REST API VS. GraphQL API

  DOM vs BOM <https://www.youtube.com/watch?v=q1fQnGG1bgU>

DOM (Document Object Model)
HTML 요소 간의 부자 관계를 반영하여, 모든 노드를 트리 구조로 구성한 것

DOM은 브라우저에서 제공하는 API중 하나
ex) document.querySelector(), Node.appendChild()

HTML Collection VS. NodeList
getElementByClassName or querySelectorAll
forEach 불가능 vs forEach 가능

DOM 추가 방식

- innerHTML (1) : 기존 노드를 제거하고 추가 하기에 비효율적일수 있음.
- insertAdjacentHTML (2) : 기존 요소를 제거하지 않고, 위치를 지정추가 가능함.
- appendChild(3) : insertAdjacentHTML처럼 기존 요소를 제거하지는 않지만, 새로운 요소를 만들어 줘야하는 번거로움이 있음.

렌더링 과정

DOM 조작을 최소화해야 성능 올릴 수 있다는 사실을 이해하기 위해선, 브라우저 렌더링 과정을 이해 해야함.

## HTML

## CSS

## JavaScript

<https://devowen.com/276>

## React

## CSR(Client Server Rendering)

SPA(Single Page Application) - rendering partly each components. Ex) React,View and Angular.
Request source code to server and create static page

Drawback of CSR

1. Initial Loading may take too long
2. Low SEO

## SSR (Server Side Rendering) - Next.js

Instead of dealing everything in clident side, Request to server and create HTML file with JS.
Show to client side.

Drawback of SSR

1. Blinking issue, non-rich site interactions
2. Server side overhead - as it load from the server.
3. Need to wait before interacting

<https://gyoogle.dev/blog/web-knowledge/Cookie%20&%20Session.html>
<https://garden1500.tistory.com/11>
