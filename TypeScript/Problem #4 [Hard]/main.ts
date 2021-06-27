let input: Array<number> = [3, 4, -1, 1]

let first_missing_positive = (list: Array<number>): number => {
    // Couldn't do it with an O(n) time complexity
    if (!list.indexOf(1) || Math.max(...list) === 1) {
        return 1;
    }

    if (list.length === 1) 
        return 1

    list.sort()

    for(let i: number = 0; i < list.length; i++) {
        if (list[i] > 0) {
            if (i === (list.length - 1))
                return list[i] + 1
            else if (list[i + 1] != list[i] + 1 && list[i + 1] != list[i])
                return list[i] + 1
        }
    }
}

console.log(first_missing_positive(input))