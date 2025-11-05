const prompt = require('prompt-sync')();

const items = [
  { name: 'Carrot', pricePerUnit: 20 },
  { name: 'Beetroot', pricePerUnit: 50 },
  { name: 'Beans', pricePerUnit: 10 }
];

let totalAmount = 0;

for (let i = 0; i < items.length; i++) {
  // read quantity and convert to number
  let qty = Number(prompt(`Enter quantity for ${items[i].name}: `));

  // basic validation: convert invalid or negative input to 0
  if (isNaN(qty) || qty < 0) qty = 0;

  // store quantity and compute line total on the object
  items[i].quantity = qty;
  items[i].lineTotal = items[i].pricePerUnit * qty;

  // add to running total
  totalAmount += items[i].lineTotal;

  // print a line for this item
  console.log(`${items[i].name}: ₹${items[i].pricePerUnit} x ${qty} = ₹${items[i].lineTotal}`);
}

console.log('----------------------------');
console.log(`Subtotal: ₹${totalAmount}`);
