// Solution 1: Increment Then Return
const createCounter = (n: number) => {
    let currentCount = n - 1;
    return function() {
        currentCount += 1;
        return currentCount;
    }
}

// Solution 2: Postfix Increment Syntax
const createCounter2 = (n: number) => {
    return function() {
      return n++;      
    };
};

// Solution 3: Prefix Decrement and Increment Syntax
const createCounter3 = (n: number) => {
    --n;
    return function() {
      return ++n;      
    };
};

// Solution 4: Postfix Increment Syntax With Arrow Function
const createCounter4 = (n: number) => {
    return () => n++;
};

export {};