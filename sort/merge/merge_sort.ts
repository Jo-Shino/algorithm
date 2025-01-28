function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array;

  let center = Math.floor(array.length / 2);
  let left = array.slice(0, center);
  let right = array.slice(center);

  mergeSort(left);
  mergeSort(right);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      array[k] = left[i];
      i += 1;
    } else {
      array[k] = right[j];
      j += 1;
    }
    k += 1;
  }

  while (i < left.length) {
    array[k] = left[i];
    i += 1;
    k += 1;
  }

  while (j < right.length) {
    array[k] = right[j];
    j += 1;
    k += 1;
  }
  return array;
}

// Test cases
const testArrays = [
  [64, 34, 25, 12, 22, 11, 90],
  [1],
  [],
  [5, 2, 3, 1, 4],
  [1, 1, 1, 1],
  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
];

console.log("=== Merge Sort Test Cases ===");
testArrays.forEach((arr, index) => {
  console.log(`Test case ${index + 1}:`);
  console.log("Before:", arr);
  console.log("After: ", mergeSort([...arr]));
  console.log("---");
});
