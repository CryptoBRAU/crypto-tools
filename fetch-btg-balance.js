function fetchBalanceForAddress(btcAddress) {
  return fetch('https://api.blockcypher.com/v1/btc/main').then((btcMainChainResponse) => {
    return btcMainChainResponse.json();
  }).then((btcMainChain) => {
    const btcAddressRequestUrl = `https://api.blockcypher.com/v1/btc/main/addrs/${btcAddress}?confirmations=${btcMainChain.height - 491406}`;
    return fetch(btcAddressRequestUrl).then((btcAddressResponse) => {
      return btcAddressResponse.json();
    });
  }).then((btcAddressBeforeBTGBlock) => {
    console.log(`The BTG Balance for address ${btcAddress} is ${btcAddressBeforeBTGBlock.final_balance / 10000 / 10000}`);
  }).catch((error) => {
    console.error(error);
  });
};

// Use it like this
fetchBalanceForAddress('1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX');
