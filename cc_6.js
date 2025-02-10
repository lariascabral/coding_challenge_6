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
    return `Sales Tax: $${tax.toFixed(2)}`
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

// Test data 2 - Premium plan
console.log(calculateSubscriptionCost("Premium", 12, 0)) ;       // Output: Total Cost: $240


// Task 5 - Currency Conversion

function convertCurrency(amount, exchangeRate) {
    const conversion = amount * exchangeRate
    return `Converted Amount: $${conversion.toFixed(2)}`
}

// Test data 1
console.log(convertCurrency(100, 1.1)) ;                         // Output: Converted Amount: $110.00

// Test data 2
console.log(convertCurrency(250, 0.85)) ;                        // Output: Converted Amount: $212.50


// Task 6 - Higher-Order Function for Bulk Orders

let orders = [ 300, 495, 570, 650, 700, 1230] ;                  // Creation of array

function applyBulkDiscount(orders, bulkDiscount) {
    return orders.map(bulkDiscount) ;                            // Application of the bulk discount
} ;

const bulkDiscount = amount => amount > 500 ? amount * 0.9 : amount;
let discountedOrders = applyBulkDiscount(orders, bulkDiscount) ;

console.log("Orders with possible discount applied:", discountedOrders) ;       // Output: Orders with possible discount applied: [300, 495, 513, 585, 630, 1107]


// Task 7 - Business Expense Tracker

function createExpenseTracker() {
    let totalExpenses = 0 ; 
    return function(expense) {
        totalExpenses += expense ;
    return `Total Expenses: $${totalExpenses}` ;
    } ;
} ;

let tracker = createExpenseTracker();
console.log(tracker(200));                                       // Output: "Total Expenses: $200"
console.log(tracker(150));                                       // Output: "Total Expenses: $350"

