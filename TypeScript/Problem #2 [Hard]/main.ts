let input: Array<number> = [1, 2, 3, 4, 5]

let product_of_list = (list: Array<number>, index: number): number => {
    let product: number = 1

    for(let n of list) {
        if (list.indexOf(n) != index)
            product *= n
    }

    return product
}

let solve = (input: Array<number>): Array<number> => {
    let output: Array<number> = []

    for(let n of input) {
        let product: number = product_of_list(input, input.indexOf(n))
        output.push(product)
    }

    return output;
}
        
solve(input)