# 입출력 I/O

```javascript
const fs = require("fs");

// 백준 제출시, 주석 제거
const readFileSyncAddress = "/dev/stdin";
let input = fs.readFileSync(readFileSyncAddress).toString().split("\n");
```
