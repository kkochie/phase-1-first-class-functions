function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Named Function");
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log("Anonymous Function");
}