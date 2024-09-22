// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}
console.log(bubbleSort([1, 2, 3, 4, 5, 0, -1, -3]));
