n_list = [10, 15, 3, 7]
k = 17

def solve(n_list, k): 
    for n in n_list:
        aux = k
        aux -= n

        if aux in n_list:
            print(f"{n} + {aux} = {k}")
            return True

    return False

solve(n_list, k)
