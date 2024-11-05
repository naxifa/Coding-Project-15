
// Task 1 - array of assets 

export const assets = [
    { id: 1, name: "Tech Stock", type: "stock", price: 265, quantity: 50 },
    { id: 2, name: "Savings Bond", type: "bond", price: 175, quantity: 100 },
    { id: 3, name: "Growth Fund", type: "ETF", price: 320, quantity: 25 },
];

// Function to get asset details by ID
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}

