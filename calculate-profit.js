// profitFrom({ sell: 100, buy: 50 })
function profitFrom({ sell, buy }) {
  const profit = sell - buy
  return (100 * profit / buy) + '%';
}
console.log('Is the profit calculation working?', profitFrom({ buy: 50, sell: 100 }) === '100%')
