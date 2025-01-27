function partition(array, low, high) {
    var _a, _b;
    var i = low - 1;
    var pivot = array[high];
    for (var j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i += 1;
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
    }
    _b = [array[high], array[i + 1]], array[i + 1] = _b[0], array[high] = _b[1];
    return i + 1;
}
function _quick_sort(_array, low, high) {
    if (low < high) {
        var partition_index = partition(_array, low, high);
        _quick_sort(_array, low, partition_index - 1);
        _quick_sort(_array, partition_index + 1, high);
    }
}
function quick_sort(array) {
    _quick_sort(array, 0, array.length - 1);
    return array;
}
var numbers = [1, 5, 10, 3, 9];
console.log("ソート前", numbers);
console.log("ソート後", quick_sort(numbers));
