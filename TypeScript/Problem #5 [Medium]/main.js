function cons(a, b) {
    function pair(f) {
        return f(a, b);
    }
    return pair;
}
var car = function (pair) {
    return pair(function (a, b) { return a; });
};
var cdr = function (pair) {
    return pair(function (a, b) { return b; });
};
console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));
