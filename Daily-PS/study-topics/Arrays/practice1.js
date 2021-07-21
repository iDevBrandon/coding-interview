function findSum(arr, weight) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === weight) {
        return [i, j];
      }
    }
  }
  return -1;
}

function findSumBetter(arr, weight) {
  let hashtable = {};

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let difference = weight - currentElement;

    if (hashtable[currentElement] != undefined) {
      return [i, hashtable[currentElement]];
    } else {
      hashtable[difference] = i;
    }
  }
  return -1;
}

// .slice()
function arraySlice(array, beginIndex, endIndex) {
  if (!beginIndex && !endIndex) {
    return array;
  }

  if (!endIndex) {
    endIndex = array.length;

    let partArray = [];

    for (let i = beginIndex; i < endIndex; i++) {
      partArray.push(array[i]);
    }
  }
  return partArray;
}

// find median value in array
function medianOfArray(array) {
  let length = array.length;

  // odd
  if (length % 2 === 1) {
    return array[Math.floor(length / 2)];
  } else {
    // even
    return array[length / 2] + array[length / 2 - 1] / 2;
  }
}

function medianOfArray(array) {
  let length = array.length;
  // odd
  if (length % 2 === 1) {
    return array[Math.floor(length / 2)];
  } else {
    // even
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}

// map, filter, reduce

// map
[1, 2, 3, 4, 5, 6, 7].map(function (value) {
  return value * 10;
});

// multi layer array
function Matrix(rows, columns) {
  let jaggedArray = new Array(rows);
  for (let i = 0; i < columns; i += 1) {
    jaggedArray[i] = new Array(rows);
  }
  return jaggedArray;
}

console.log(Matrix(3, 3));

// tic-tac-toe
function checkRow(rowArr, letter) {
  for (let i = 0; i < 3; i++) {
    if (rowArr[i] !== letter) {
      return false;
    }
  }
  return true;
}

function checkColumn(gameBoardMatrix, columnIndex, letter) {
  for (let i = 0; i < 3; i++) {
    if (gameBoardMatrix[i][columnIndex] != letter) {
      return false;
    }
  }
  return true;
}
