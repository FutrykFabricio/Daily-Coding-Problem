_input = [1, 2, 3, 4, 5]

def product_of_list(n_list, curr_index):
    product = 1

    for i in range(len(n_list)):
        if i != curr_index:
            product *= n_list[i]
    
    return product

def solve(_input):
    output = []

    for i in range(len(_input)):
        product = product_of_list(_input, i)
        output.append(product)
    
    return output
        
print(solve(_input))