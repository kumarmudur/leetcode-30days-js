// Solution 1: Increment Then Return
const createCounter = (n: number) => {
    let currentCount = n - 1;
    return function() {
        currentCount += 1;
        return currentCount;
    }
}

// Solution 2: Postfix Increment Syntax
const createCounter2 = function(n: number) {
    return function() {
      return n++;      
    };
};


export {};