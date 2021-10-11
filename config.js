module.exports = {
  precision: 8,
  ethPrecision: 18,
  symbol: "RFOX",
  network: "KOVAN",
  eos: {
    wsEndpoint: "wss://wax.dfuse.eosnation.io/v1/stream", //UNKNOWN, QUERY TO KAEFER/PETE
    chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4", //TESTNET
    endpoint: "https://testnet.wax.pink.gg",
    bridgeContract: "bridge.rfox", //replace with kaefer contract
    oracleAccount: "afifwaxtest1", //how to get one : provided by oracle
    privateKey: "PVT_K1_2WWCztiEm3ey6iEeJHtm56FUDPE5Yi4ocBdMba5ViZMgB3rAve", //private key of oracle account
  },
  eth: {
    wsEndpoint: "wss://kovan.infura.io/ws/v3/6e8d4ffb6902406bb556135e343ef61a",
    endpoint: "https://kovan.infura.io/v3/6e8d4ffb6902406bb556135e343ef61a",
    bridgeContract: "0x59408f7e707233Ab08537736B2a4362997083012", //from Thang
    oracleAccount: "0xeC2f308F7cC266D207af1b1b10a1a3A5966c208b",
    privateKey:
      "31e5d2b778c1729a248b284f3f24457da31011b780f779682d9986c3223333f8",
  },
};

//TO RUN CONFIG

// node oracle-eos.js
// node oracle-eth.js

// Oracle accounts must be registered using the regoracle (EOSIO) or regOracle (Ethereum) functions.
