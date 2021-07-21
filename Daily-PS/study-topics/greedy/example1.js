function getChange(value) {
  let changes = [10000, 5000, 1000, 500, 100, 50, 10];
  let won = Math.floor(value / 10) * 10;
  let i = 0;
  let counts = [];

  while (true) {
    if (won >= changes[i]) {
      let count = Math.floor(won / changes[i]);
      won = won - changes[i] * count;
      counts[i] = count;
    } else {
      counts[i] = 0;
    }

    i++;
    if (won === 0) {
      for (let j = 0; j < changes.length - i; j++) {
        counts.push(0);
      }
      break;
    }
  }

  changes.map((change, index) => {
    console.log(`${change.toLocaleString()} ${counts[index]}`);
  });
}

getChange(32660);
