# FE Interview questions

## General(Frontend Stack)

- DOCTYPE 이 무엇인가?
  DOCTYPE은 문서 종류를 선언하는 태그, 어떤 버전의 HTML을 사용할 것인지 브라우저에게 알려줌. <!DOCTYPE html>

## DOM vs BOM <https://www.youtube.com/watch?v=q1fQnGG1bgU>

DOM (Document Object Model)
HTML 요소 간의 부자 관계를 반영하여, 모든 노드를 트리 구조로 구성한 것

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

<img width="1389" alt="Screen Shot 2021-08-09 at 3 39 05 PM" src="https://user-images.githubusercontent.com/40842018/128668449-86210b5d-e2ba-4289-9bb9-254eca7f77e1.png">

브라우저는 렌더링 엔진은 클라이언트가 서버로부터 요청한 html부터 순차적으로 파싱하며, DOM을 생성해 간다.
그리고, CSS 스타일 태그를 만나면, CSSOM을 생성한다.
css 파싱을 완료하면, html 파싱이 중단된 지점부터 다시 html 파싱을 시작.
이 둘을 합쳐서, 렌더 트리를 구조를 만듭니다.
그 후, JS 스크립트 태그를 만나며, 브라우저는 렌더링 엔진에서 부터, 자바스크립트 엔진한테 제어권을 넘김.
다시 중단된 지점부터 다시 DOM을 생성합니다.

브라우저는 동기적으로 위에서 아래 방향으로 순차적으로 실행. 스크립트태크 위치에 따라, DOM 생성이 지연될수 있음.

CSS 태그 상단 위치 시키는 이유 : 스타일 시트 다운을 최대한 빠르게 해서, 빈화면 응시 시간을 쭐이기 위해.

JS 스크립트 태그 하단에 위치 시키는 이유: html 파서는 스크립트 태그를 만나면, 파싱을 멈추고 스크립트를 읽기에 로딩이 더욱 느려질수 있음.
생성되진 않은 DOM을 읽을수도 없기에.

Virtual DOM
생성 이유: DOM 트리가 수정될 때 마다, 새로운 렌더트리를 생성해야됨(하나의 요소만 바껴도, 전체 페이지 갱신).

이전 DOM과 가상 DOM을 비교하여, 바뀐부분만 실제 DOM에 적용시킴.

Virtual DOM은 자바스크립트 객체 구성형태를 띄고, 실제 DOM이 아닌 메모리상에서 처리되기 때문에, 훨씬 빠르게 작동한다.

element의 속성 값만 변한 경우 -> 속성 값만 업데이트

element 태그가 변경된 경우, 해당 하위 모든 노드를 unmount후, 새로운 virtual DOM으로 교체

BOM(Browser Object Model)
웹 브라우저 환경을 다양한 기능을 객체처럼 다루는 모델
window 객체는 최상위 객체

## Cookie, Session, Cache <https://www.youtube.com/watch?v=OpoVuwxGRDI>

쿠키는 사이트를 방문하고 브라우저에 저장되는 내용을 의미한다.
쿠키는 내가 임의로 고치고 지울수 도 있고, 심지어 남이 훔쳐볼수도 있다.
쿠키는 지워지거나, 조작되도 큰일 나지 않는 장바구니, 공지 메세지 1일 안보기 등등에 사용된다.

세션을 사용하는 사이트를 접속하면, 서버에서는 사용자를 구별하기 위해 기한이 짧은 쿠키를 브라우저에 저장한다.
브라우저가 이 사이트를 돌아다닐때, http 요청에 이 키를 실어서 전송하고, 서버는 이 쿠키를 이용해 사용자의 세션을 유지한다.
그리고 서버는 사용자를 인식하고, 응답을 보내준다.

ex) 사이트 접속이 안되면, 쿠키를 제거 해보는것도 방법중 하나이다.

캐쉬는 가져오는데 비용이 드는 데이터를 한 번 가져온 뒤에는 임시로 저장해 두는것이다.

## HTML

## CSS

## JavaScript

<https://devowen.com/276>

### Promise & Async & Await

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
