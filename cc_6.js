// Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return ((sellingPrice - costPrice) * unitsSold)
} ;

// Test data 1
costPrice = 20
sellingPrice = 30
unitsSold = 100
console.log(`Total Profit: $${calculateProfit(costPrice, sellingPrice, unitsSold)}`)        // Output: Total Profit: $1000

// Test data 2
costPrice = 50
sellingPrice = 70
unitsSold = 200
console.log(`Total Profit: $${calculateProfit(costPrice, sellingPrice, unitsSold)}`)        // Output: Total Profit: $4000
