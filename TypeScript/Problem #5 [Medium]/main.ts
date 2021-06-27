function cons(a: number, b: number) {
    function pair(f) {
        return f(a, b)
    }
    return pair
}

let car = (pair): number => {
    return pair((a: number, b: number) => a)
}

let cdr = (pair): number => {
    return pair((a: number, b: number) => b)
}

console.log(car(cons(3, 4)))
console.log(cdr(cons(3, 4)))