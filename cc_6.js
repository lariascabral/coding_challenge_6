// Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = ((sellingPrice - costPrice) * unitsSold)
    return `Total Profit: $${profit}`

} ;                                                                 // Creation of function to calculate profits

// Test data 1
console.log(calculateProfit(20, 30, 100)) ;     // Output: Total Profit: $1000

// Test data 2
console.log(calculateProfit(50, 70, 200)) ;     // Output: Total Profit: $4000


// Task 2 - Sales Tax Computation

function calculateSalesTax (amount, taxRate) {
    let tax = amount * taxRate
    return `Sales Tax: $${tax}`
} ;                                                                 // Creation of function to calculate profits

// Test data 1 - 7% sales tax
console.log(calculateSalesTax(100, 0.07)) ;        // Output: Sales Tax: $7

// Test data 2 - 10% sales tax
console.log(calculateSalesTax(500, 0.1)) ;         // Output: Sales Tax: $50


// Task 3 - Employee Bonus Calculation

const calculateBonus = (salary, performanceRating) => {      // Function of rcalculating loyalty points
    let bonus ;
    if (performanceRating === "Excellent") {
        bonus = salary * 0.2
    } 
    else if (performanceRating === "Good") {
        bonus = salary * 0.1
    }
    else if (performanceRating === "Average") {
        bonus = salary * 0.05
    }
    return `Bonus: $${bonus}`
    } ;

 // Test data 1 - Excellent
console.log(calculateBonus(5000, "Excellent")) ;      // Output: Bonus: $1000

// Test data 2 - Good
console.log(calculateBonus(7000, "Good")) ;           // Output: Bonus: $700


