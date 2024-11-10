
// Task 4 - Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import { Transaction } from "./transaction.js";

function displayOutput(text, isTitle = false) {
    const outputDiv = document.getElementById("output");
    if (isTitle) {
        outputDiv.innerHTML += `<div class="section-title">${text}</div>`;
    } else {
        outputDiv.innerHTML += `<p>${text}</p>`;
    }
}

displayOutput("Portfolio Value: $" + calculatePortfolioValue().toFixed(2), true);
displayOutput("Portfolio Allocation: ", true);

const allocation = getPortfolioAllocation();
allocation.forEach(asset => {
    displayOutput(`${asset.name}: ${asset.allocation}`);
});

// Transactions
try {
    const buyTransaction = new Transaction(1, "buy", 10);  // Buying 10 units of asset with id 1
    const sellTransaction = new Transaction(2, "sell", 30); // Selling 30 units of asset with id 2

// Apply transactions
 buyTransaction.apply();
 sellTransaction.apply();

 // Display transaction details
 displayOutput("Transactions:");
 displayOutput("Bought 10 units of Tech Stock");
 displayOutput("Sold 30 units of Savings Bond");

 // Display the updated portfolio details after transactions
 displayOutput("Updated Portfolio Value: $" + calculatePortfolioValue().toFixed(2), true);
 displayOutput("Updated Portfolio Allocation: ", true);

 const updatedAllocation = getPortfolioAllocation();
 updatedAllocation.forEach(asset => {
     displayOutput(`${asset.name}: ${asset.allocation}`);
 });

} catch (error) {
 displayOutput(`Error: ${error.message}`);
}


