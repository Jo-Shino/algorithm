function partition(array: number[], low: number, high: number): number {
  let i = low - 1;
  let pivot = array[high];

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i += 1;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}

function _quick_sort(_array: number[], low: number, high: number): void {
  if (low < high) {
    const partition_index = partition(_array, low, high);
    _quick_sort(_array, low, partition_index - 1);
    _quick_sort(_array, partition_index + 1, high);
  }
}

function quick_sort(array: number[]): number[] {
  _quick_sort(array, 0, array.length - 1);
  return array;
}

const numbers = [1, 5, 10, 3, 9];
console.log("ソート前", numbers);
console.log("ソート後", quick_sort(numbers));
