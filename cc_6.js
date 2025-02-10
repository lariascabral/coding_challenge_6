// Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return ((sellingPrice - costPrice) * unitsSold)
} ;                                                                 // Creation of function to calculate profits

// Test data 1
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`)       // Output: Total Profit: $1000

// Test data 2
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`)       // Output: Total Profit: $4000


// Task 2 - Sales Tax Computation

function calculateSalesTax (amount, taxRate) {
    return amount * taxRate
} ;                                                                 // Creation of function to calculate profits

// Test data 1 - 7% sales tax
console.log(`Sales Tax: $${calculateSalesTax(100, 0.07)}`)          // Output: Sales Tax: $7

// Test data 1 - 10% sales tax
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`)           // Output: Sales Tax: $50


