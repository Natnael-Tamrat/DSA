function merge(arr1, arr2) {
  let results = [];
  let left = 0,
    right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      results.push(arr1[left]);
      left++;
    } else {
      results.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    results.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    results.push(arr2[right]);
    right++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 20, 3, -9, 6]));
