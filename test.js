/*

You are givven a list of all the transactions on a bank account during the year 2020.
The account was empty at the beginning of the year (the balance was 0)

Each transaction specifies the amount and date it was executed. If the amount is negative, thenn it was a card payment,
otherwise it was an incoming transfer. The date of each transaction is a YYY-MM-DD format: for example, 2020-05-20 represents 20th May 2020

Additionally, there is a fee for having a card (omitted in the given transaction list), which is 5 per month. This fee is deducted from the 
account balance at the end of the month unless there were at least three payments made by card for a total cost of at least 100 within the month.

Your task is to compute the final balance of the account at the end of the year 2020

Write a function 
function solution(A, D)

that given an array A of N integers representing transaction amounts, and an array D of N strings representing transaction dates, returns the final
balance of the account at the end of the year 2020. Transaction number K (for K within the range [0..N..1]) was executed on the date represented by D[K]
for amount A[K]

Examples:
2. Given A =[100, 100, 100, -10] and D= ['2020-12-22', '2020-12-22' '2020-12-03', '2020-12-29'], the function should return 230. Total income was equal to 
100 + 100 + 100 - 10 = 290 and the fee paid every month, so 290 - (5 * 12) = 230


Assume that:
N is an integer within the range [1...100];
each element of array A is an integer within the range [-1000 ...1000];
D contains strings in YYYY-MM-DD format, representing dates in the range 2020-01-01 to 2020-12-31 

*/

/* 
Key points
1. List of transactions (Amount, Date)
2. Initial balance  = 0
3. A < 0 = Card payment(- money)
   A > 0 = Incoming transfer
4. Card fee = 5/month 
unless, > 3 payments && A > 100


1. Variable for totalBalance = 0
2. Variable for total fees = 0 
3. loop through the transactions and get the total amounts
4. check if a month has multiple transactions 
if > 3 transactions and transactions are > 100 dont subtract 5
else subtract 5 



*/

function solution(A, D){

    let totalBalance = 0
    let totalFees = 0
    // dictionary to store {month: no of transactions}
    let monthlyTransactions = {}

    for (let i = 0 ; i < A.length; i++){
        let amount = A[i]
        let date = D[i]
        let x,month,_ = date.split("-")
        // make the month a key for the object who's key:value pairs are month: no of transactions
        let monthKey = {month}
       
        /*
        if(!monthlyTransactions[monthKey]){
            // if the curret month doesn't exist in monthlyTransactions then initialize it 
            monthlyTransactions[monthKey] = 1
        }else{
            // If it already is then add 1
            monthlyTransactions[monthKey] ++
        }
        */
         // count[num] = (count[num] || 0) + 1
        monthlyTransactions[monthKey] = (monthlyTransactions[monthKey] || 0) + 1

        totalBalance += amount 

        for (let month in monthlyTransactions){
            /*
           const person = {fname:"John", lname:"Doe", age:25}; 
       
           for (let x in person) {
           txt += person[x] + " ";
           }
       
           output = John Doe 25
            */
           let payment = monthlyTransactions[month]
           if(payment >= 3 && amount > 100){
            totalFees = 0
           }
           else{
            totalFees = 5 * payment
           }
   
       }
    }

    let endBalance = totalBalance - totalFees
    return endBalance

    //return totalBalance
    //return monthlyTransactions  
    

     //for (key in object) 
    //for (let month in monthlyTransactions){
         /*
        const person = {fname:"John", lname:"Doe", age:25}; 
    
        for (let x in person) {
        txt += person[x] + " ";
        }
    
        output = John Doe 25
         */
       // let payment = monthlyTransactions[month]

    //}
    
}



console.log(solution([100, 100 ,100, -10], ['2020-12-22', '2020-12-22', '2020-12-03', '2020-12-29'])) // 230
console.log(solution([180, -50 ,-25, -25], ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31'])) // 25
console.log(solution([-1, -1 , 0, -105, 1], ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12'])) // 