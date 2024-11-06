
// Task 4 - Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import { Transaction } from "./transaction.js";

// Total portfolio value
console.log("Total Portfolio Value:", calculatePortfolioValue());

// Allocation percentages for each asset
console.log("Portfolio Allocation:", getPortfolioAllocation());

// Transactions
try {
    const buyTransaction = new Transaction(1, "buy", 10);  // Buying 10 units of asset with id 1
    const sellTransaction = new Transaction(2, "sell", 30); // Selling 30 units of asset with id 2

// Apply transactions
 buyTransaction.apply();
 sellTransaction.apply();

// Display transaction details
 console.log("Transactions:");
 console.log("Bought 10 units of Asset ID 1");
 console.log("Sold 20 units of Asset ID 2");

// Display the updated portfolio value and allocation after transactions
 console.log("Updated Portfolio Value:", calculatePortfolioValue());
 console.log("Updated Portfolio Allocation:", getPortfolioAllocation());
} 

catch (error) {
 console.error(error.message);
}

