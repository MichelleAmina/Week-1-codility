function solution(A, D) {
    let totalBalance = 0;
    let totalFees = 0;
    let monthlyTransactions = {};
    let freeMonths = 0;

    for (let i = 0; i < A.length; i++) {
        let amount = A[i];
        let date = D[i];
        let month = date.split("-")[1];

        if (!monthlyTransactions[month]) {
            monthlyTransactions[month] = { count: 0, sum: 0 };
        }

        monthlyTransactions[month].count++;
        monthlyTransactions[month].sum += amount;

        totalBalance += amount;
    }

    console.log("Monthly Transactions:", monthlyTransactions);

    for (let month in monthlyTransactions) {
        let transactions = monthlyTransactions[month].count;
        let sum = monthlyTransactions[month].sum;

        if (transactions >= 3 && sum < 0 && Math.abs(sum) >= 100) {
            freeMonths++;
        }
    }

    console.log("Free Months:", freeMonths);

    totalFees = 5 * (12 - freeMonths);
    console.log("Total Fees:", totalFees);

    let endBalance = totalBalance - totalFees;
    console.log("End Balance:", endBalance);

    return endBalance;
}

console.log(solution([100, 100, 100, -10], ['2020-12-22', '2020-12-22', '2020-12-03', '2020-12-29'])); // Output: 230
console.log(solution([180, -50 ,-25, -25], ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31'])); // 25
console.log(solution([-1, -1 , 0, -105, 1], ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12'])); // -164





