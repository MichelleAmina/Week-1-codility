def solution (A, D):
    total_balance = 0
    total_fee = 0

    for amount, date in zip(A, D):
        year, month, _ = date.split("-")
        
    
    return total_balance

print(solution([100, 100 ,100, -10], ['2020-12-22', '2020-12-22', '2020-12-03', '2020-12-29']))


"""
for i, j in zip(A, D):
        amount = i 
        total_balance += amount
        date = j
    
    return total_balance
"""