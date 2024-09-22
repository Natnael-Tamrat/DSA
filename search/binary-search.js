const integers = [1, 2, 3, 4, 5, 6, 9];

function binarySearch(val) {
  let left = 0,
    right = integers.length - 1;
  let middle = Math.floor((left + right) / 2);
  if (val > integers[right] || val < integers[left]) return -1;

  while (integers[middle] != val) {
    if (val > integers[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return middle;
}

console.log(binarySearch(4));
