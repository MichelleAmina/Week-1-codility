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

def solution(A, D):
    total_balance = 0
    monthly_transactions = {}
    total_fees = 0

    for amount, date in zip(A, D):
        month = int(date.split("-")[1])
        monthly_transactions[month] = monthly_transactions.get(month, 0) + amount
        total_balance += amount

    for month, income in monthly_transactions.items():
        if income < -100:
            total_fees += 5
        elif income < 100 and income > 0:
            total_fees += 5

    end_balance = total_balance - total_fees
    return end_balance

# Example usage:
print(solution([100, 100, 100, -10], ['2020-12-22', '2020-12-22', '2020-12-03', '2020-12-29']))  # Output: 230


