var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeSort(array) {
    if (array.length <= 1)
        return array;
    var center = Math.floor(array.length / 2);
    var left = array.slice(0, center);
    var right = array.slice(center);
    mergeSort(left);
    mergeSort(right);
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            array[k] = left[i];
            i += 1;
        }
        else {
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
var testArrays = [
    [64, 34, 25, 12, 22, 11, 90],
    [1],
    [],
    [5, 2, 3, 1, 4],
    [1, 1, 1, 1],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
];
console.log("=== Merge Sort Test Cases ===");
testArrays.forEach(function (arr, index) {
    console.log("Test case ".concat(index + 1, ":"));
    console.log("Before:", arr);
    console.log("After: ", mergeSort(__spreadArray([], arr, true)));
    console.log("---");
});
