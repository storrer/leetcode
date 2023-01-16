number = int(input())
#print(number)
def fibonacci(num):
    # initialize the fibonnaci array
    fib = [0,1]
    # loop up to num, storing subsolutions in fib[]
    for i in range(2, num+1):
        fib.append(fib[i-1] + fib[i-2])
    return fib[num]
print('the Fibonacci number for', number, 'is', fibonacci(number))