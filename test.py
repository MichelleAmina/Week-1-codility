"""

def solution (A, D):
    total_balance = 0
    total_fee = 0

    for amount, date in zip(A, D):
        year, month, date = date.split("-")
        # year=2020, month=1, date=13 
        month_key = f"{year}-{month}"
        

        
    
    return total_balance

print(solution([100, 100 ,100, -10], ['2020-12-22', '2020-12-22', '2020-12-03', '2020-12-29']))

"""






