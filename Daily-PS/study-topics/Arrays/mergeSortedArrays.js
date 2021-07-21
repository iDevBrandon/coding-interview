function mergeSortedArrays(arr) {
  let sumArrays = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        sumArrays.push(arr[i]);
      } else {
        sumArrays.push(arr[j]);
      }
    }
  }

  return sumArrays;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0,3,4,4,6,30,31]

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // check input
  if (array1.length === 0) {
    return array2;
  }

  while (array1Item || array2Item) { // might reach to undefined one of them
    if (!array2Item ||  array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      i++;
    }
  }

  if (array2.length === 0) {
    return array1;
  }

  return mergedArray;
}
