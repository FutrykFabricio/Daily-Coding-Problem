var input = [-1];
var first_missing_positive = function (list) {
    if (!list.indexOf(1) || Math.max.apply(Math, list) === 1) {
        return 1;
    }
    if (list.length === 1)
        return 1;
    list.sort();
    for (var i = 0; i < list.length; i++) {
        if (list[i] > 0) {
            if (i === (list.length - 1))
                return list[i] + 1;
            else if (list[i + 1] != list[i] + 1 && list[i + 1] != list[i])
                return list[i] + 1;
        }
    }
};
console.log(first_missing_positive(input));
