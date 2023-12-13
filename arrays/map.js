/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// time: O(n) | space :O(1)
const map = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = map(arr[i], i);
    }
    return arr;
}