const createHelloWorld = () => {
    return function(): string {
        return 'Hello World';
    }
}

const createHelloWorld1 = () => {
    return () => 'Hello World';
}

const createHelloWorld2 = () => {
    return (...args: any[]) => 'Hello World';
}


export {};