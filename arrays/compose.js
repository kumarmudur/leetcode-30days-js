/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => {
    return function() {
        functions = [...functions].reverse();
        functions.map(func => {
            x = func(x);
        });
        return x;
    }
}