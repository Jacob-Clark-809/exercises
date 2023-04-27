function isItemAvailable(id, transactions) {
  let relevantTransactions = transactionsFor(id, transactions);
  let quantities = relevantTransactions.map(transaction => {
    if (transaction.movement === 'in') {
      return transaction.quantity;
    } else {
      return -transaction.quantity;
    }
  });

  return quantities.reduce((sum, current) => sum + current) > 0;
}

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
