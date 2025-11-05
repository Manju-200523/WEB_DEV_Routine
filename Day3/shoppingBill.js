const prompt = require("prompt-sync")();
let carrotPrice=10;
let beetrootPrice=20;
let beansPrice=30;

let carrotquantity=Number(prompt("Enter the quantity of carrot"));
let beetrootquantity=Number(prompt("Enter the quantity of beetroot"));
let beansquantity=Number(prompt("Enter the quantity of beans"));

carrotTotal = carrotPrice * carrotquantity;
beetrootTotal = beetrootPrice * beetrootquantity;
beansTotal = beansPrice * beansquantity;

console.log(totalAmount = carrotTotal + beetrootTotal + beansTotal);

let discountPrice = (totalAmount > 100) ? totalAmount-(totalAmount * 0.1) : totalAmount;
console.log(`Discounted Price: ${discountPrice}`);

