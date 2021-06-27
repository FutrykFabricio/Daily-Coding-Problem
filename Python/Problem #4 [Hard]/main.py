_input = [3, 4, -1, 1]

def first_missing_positive(arr):
    # Couldn't do it with an O(n) time complexity
    if 1 not in arr or max(arr) < 1:
            return 1 
    
    if len(arr) == 1:
        return 2 if arr[0] == 1 else 1
    
    arr.sort()

    for i in range(len(arr)):
        if arr[i] > 0:
            if i == len(arr) - 1:
                return arr[i] + 1
            elif arr[i + 1] != arr[i] + 1 and arr[i + 1] != arr[i]:
                return arr[i] + 1

print(first_missing_positive(_input))
