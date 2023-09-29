// Solution 1: Increment Then Return
const createCounter = (n) => {
    let currentCount = n - 1;
    return function() {
        currentCount += 1;
        return currentCount;
    }
}

// Solution 2: Postfix Increment Syntax
const createCounter1 = function(n) {
    return function() {
      return n++;      
    };
};