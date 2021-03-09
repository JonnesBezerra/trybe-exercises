let productCost = 100, productSale = 150;
let totalCost, profit, totalProfit;

if (productCost <= 0 || productSale <= 0) {
    console.log('Erro! Values below zero');
} else {
    totalCost = productCost + (productCost * 0.2);
    profit = productSale - totalCost;
    totalProfit = profit * 1000;
    console.log(`Total profit: $${totalProfit}.00`);
}


