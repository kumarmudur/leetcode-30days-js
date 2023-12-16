/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
    let accumulator = init;
    for (const element of nums) {
        accumulator = fn(accumulator, element);
    }
    return accumulator;
}