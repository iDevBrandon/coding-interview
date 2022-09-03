let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let m = input.split(" ")[0];
let n = input.split(" ")[1];

/**
 mn 개의 단위 정사각형 M*N 
 체스판은 검은색과 흰색이 번갈아서 칠해져 있다
 각 칸이 검은색과 흰색 중 하나로 색칠
 변을 공유하는 두 개의 사각형은 다른 색으로 칠해져 있다
 B = 검은색, W = 흰색
 출력 : 첫쨰 줄에 다시 칠해야 하는 정사각형 개수의 최솟값

 이해 못한 것
 예제 2에서 반복적으로 BBBBBB 이런식으로 되어 있는데?
 */
