// 문자열 내 마음대로 정렬하기

// https://school.programmers.co.kr/learn/courses/30/lessons/12915

/**
 * 문제 해설
 *
 * sort()를 활용해서, 리턴 값을 작성하면, 인덱스 내에서 정렬이 가능하다.
 *
 * input : ["sun", "bed", "car"], 1
 * output : ["car", "bed", "sun"]
 */

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    // 인덱스 n번째 글자가 같으면 사전순 정렬
    else return a > b ? 1 : -1;
  });

  return strings;
}

solution(["sun", "bed", "car"], 1);

/** 
 * 풀이
 * 
 * sort(a,b) < 0 이면, a를 b보다 작은 인덱스로 정렬
 * 앞에 자리수가 크면 1을 반환, 뒤에 숫자가 크면 -1반환
 */

// 내 생각...
// pick the charcter of "n"
// spelling을 기준으로 정렬
