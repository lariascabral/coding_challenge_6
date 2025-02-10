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

const calculateBonus = (salary, performanceRating) => {      // Function for bonus calculation
    let bonus ;
    if (performanceRating === "Excellent") {
        bonus = salary * 0.2
    } 
    else if (performanceRating === "Good") {
        bonus = salary * 0.1
    }
    else if (performanceRating === "Average") {
        bonus = salary * 0.05                         // Metrics for percentages in bonuses
    }
    return `Bonus: $${bonus}`
    } ;

 // Test data 1 - Excellent
console.log(calculateBonus(5000, "Excellent")) ;      // Output: Bonus: $1000

// Test data 2 - Good
console.log(calculateBonus(7000, "Good")) ;           // Output: Bonus: $700


// Task 4 - Subscription Pricing Model

const calculateSubscriptionCost = (plan, months, discount = 0) => {      // Function for subscription discount calculation
       let monthlyPayment ;
    if (plan === "Basic") {
        monthlyPayment = 10
    } 
    else if (plan === "Premium") {
        monthlyPayment = 20
    }
    else if (plan === "Enterprise") {
        monthlyPayment = 50                         // Metrics for subscription monthly payments
    } ;
    
    let subscriptionCost = (monthlyPayment * months) - discount ;
    return `Total Cost: $${subscriptionCost}`
    } ;

 // Test data 1 - Basic plan
console.log(calculateSubscriptionCost("Basic", 6, 10)) ;         // Output: Total Cost: $50

// Test data 1 - Basic plan
console.log(calculateSubscriptionCost("Premium", 12, 0)) ;       // Output: Total Cost: $240
