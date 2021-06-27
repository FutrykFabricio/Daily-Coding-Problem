def car(pair):
    def get_first(a, b):
        return a
    return pair(get_first)

def cdr(pair):
    def get_last(a, b):
        return b
    return pair(get_last)

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

print(car(cons(3, 4)))
print(cdr(cons(3, 4)))
