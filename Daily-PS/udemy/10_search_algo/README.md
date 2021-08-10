# Object

- Describe what a searching algorithm is
- Implement linear search on arrays
- Implement binary search on sorted arrays
- Implement a naive string searching algorithm
- Implement the KMP string searching algorithm
  
## Linear search

Loop through the array and check if the current array element is equal to the search element.
If its found it returns the index of the element. Else it returns -1.

Linear Search BIG O

O(1) : Best
O(n) : The Worst, have to look at n times

## Binary search

- Rather than eliminating one element at a time, we eliminate half of the remaining elements.
- Only works in sorted array

- Create a left point at the start of an array, and the right point at the end of the array.
- While the left point comes before the right point,
  - Create a point in the middle
  - If you find the value you want, return the index
  - If value is too small, move the left point to the middle point
  - If value is too big, move the right point to the middle point
- if you never find the value, return -1
