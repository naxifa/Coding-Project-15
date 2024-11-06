
// Task 2 - Creating the portfolio module

import {assets} from "./asset.js";

// Function to calculate the total value of the portfolio
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

// Function to calculate the percentage allocation of each asset in the portfolio
export function getPortfolioAllocation() {
    let totalPrice = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalPrice * 100).toFixed(2) + "%"
    }));
}