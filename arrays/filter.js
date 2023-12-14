/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}