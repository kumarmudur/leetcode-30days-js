/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const functionType = (n: number, i: number) => {

}

// time: O(n) | space :O(1)
function map1(arr: number[], fn: (n: number, i: number) => number): number[] {
    for (let index in arr) {
        arr[index] = fn(arr[index], Number(index));
    };

    return arr;
};