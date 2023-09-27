// Solution 1: Increment Then Return
const createCounter = (n) => {
    let currentCount = n - 1;
    return function() {
        currentCount += 1;
        return currentCount;
    }
}