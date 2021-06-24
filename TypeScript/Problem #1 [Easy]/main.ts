let n_list: Array<number> = [10, 15, 3, 7];
let k: number = 17;

let solve = (n_list, k) => {
    for(let n of n_list) {
        let aux: number = k;
        aux -= n;

        if (n_list.includes(aux)) {
            console.log(`${n} + ${aux} = ${k}`);
            return true;
        }
    }
    return false;
}

solve(n_list, k);