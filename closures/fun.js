const createHelloWorld = () => {
    return function (...args) {
        return 'Hello World';
    }
}; 

// Arrow functions
const createHelloWorld1 = () => {
    return () => 'Hello World';
}

// Arrow Syntax + Rest Arguments
const createHelloWorld2 = () => {
    return (...args) => 'Hello World';
}



