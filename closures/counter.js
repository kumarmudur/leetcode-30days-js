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

// Solution 3: Prefix Decrement and Increment Syntax
const createCounter2 = function(n) {
    --n;
    return function() {
      return ++n;      
    };
};

//Solution 4: Postfix Increment Syntax With Arrow Function
const createCounter3 = function(n) {
    return () => n++;
};

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounterAll = function(init) {
    let currentCount = init;
    return {
        increment: function() {
            currentCount += 1;
            return currentCount;
        },
        decrement: function() {
            currentCount -= 1;
            return currentCount;
        },
        reset: function() {
            currentCount = init;
            return currentCount;
        }
    }
};