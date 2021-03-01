let cost = 10;
let sale = 15;

let profit, totalProfit, tax = 1.2;

if (cost >= 0 && sale >= 0) {
    let totalCost = cost * tax;
    profit = sale - totalCost;
    totalProfit = profit * 1000;
    console.log(totalProfit);
} else {
    console.log("ERRO! Invalid values!");
}