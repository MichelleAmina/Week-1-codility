// WHY DID I CHANGE MY CODE 
// Read the question and realized i interpreted it wrong 
// it wasn't looking for just 100 but it was looking for card payment total to be 100 and occur 3 times 
// i needed a way to store not only the count/no of times a month recurred, but also the amount of money in each repetition
// More specifically i needed the negative values if any, as i already had a variable to store the total amount 
// Also needed a way to store the free months 
// And once i had the total free months, then i could find the months that needed to be paid 
// 5 * (all months/12 - free months)
//


function solution(A, D) {
    // variable for total balance 
    let totalBalance = 0;
    // variable for total fees 
    let totalFees = 0;
    // object for storing dictionary month: count, negative sum 
    let monthlyTransactions = {};
    // total months with no fee payment 
    let freeMonths = 0;

    // loop through the arrays 
    for (let i = 0; i < A.length; i++) {
        // variable for amount 
        let amount = A[i];
        // variable for date 
        let date = D[i];
        //let month = date.split("-")[1];
        // split the date into 3 different values (x =year, y =month, z= day)
        let x,y,z = date.split("-")
        // assign y(month) to month 
        let month = {y}

        //if (!monthlyTransactions[month]) {
        //    monthlyTransactions[month] = { count: 0, negativeSum: 0 };
        //}

        // check the object, if current month isn't there, initialize it and set the value to another object containing  { count: 0, negativeSum: 0 }
        monthlyTransactions[month] = monthlyTransactions[month] || { count: 0, negativeSum: 0 };

        
        // if the amount is less than 0
        if (amount < 0) {
            // increment the value to find the total negative sum
            monthlyTransactions[month].negativeSum += amount;
            // find out how many times(count) of the transaction 
            monthlyTransactions[month].count++;
        }

        totalBalance += amount;
    }

    //console.log("Monthly Transactions:", monthlyTransactions);

    // loop through the object monthly Transactions
    for (let month in monthlyTransactions) {
        // assign transactions to count ie how many times a transaction was made 
        let transactions = monthlyTransactions[month].count;
        // assign negativeSum to negativeSum ie total of negative values 
        let negativeSum = monthlyTransactions[month].negativeSum;

        // if the count of transactions is greater than three and the absolute value of the negative sums is > 100
        if (transactions >= 3 && Math.abs(negativeSum) >= 100) {
            //then increase the count of the freeMonths (ie months without fee payment )
            freeMonths++;
        }
    }

    //console.log("Free Months:", freeMonths);

    // find the total number fees for the year after subtraction freeMonths if any from 12 (ie total months in a year)
    totalFees = 5 * (12 - freeMonths);
    //console.log("Total Fees:", totalFees);

    //console.log("Total Balance", totalBalance)

    // The end balance would be the totalBalance in the account minus any fees during the year 
    let endBalance = totalBalance - totalFees;
    //console.log("End Balance:", endBalance);

    return endBalance;
}

console.log(solution([100, 100 ,100, -10,], ['2020-12-22', '2020-12-22', '2020-12-03', '2020-12-29'])) // 230
console.log(solution([180, -50 ,-25, -25], ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31'])); // 25
console.log(solution([1, -1 , 0, -105, 1], ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12'])); // -164
console.log(solution([100, 100 , -10, -20, -30], ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08'])); // 80
