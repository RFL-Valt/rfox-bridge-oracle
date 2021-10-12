module.exports = {
  precision: 8,
  ethPrecision: 18,
  symbol: "RFOX",
  network: "KOVAN",
  eos: {
    wsEndpoint: "", //STATE RECEIVER WEB SOCKET END POINT
    chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4", //TESTNET
    endpoint: "https://testnet.wax.pink.gg", //WAX ENDPOINT
    bridgeContract: "bridge.rfox", //CONTRACT IS THE SAME FOR MAINNET AND TESTNET
    oracleAccount: "", //ACCOUNT REGISTERED AS ORACLE
    privateKey: "", //PRIVATE KEY OF ORACLE ACC
  },
  eth: {
    wsEndpoint: "wss://kovan.infura.io/ws/v3/6e8d4ffb6902406bb556135e34E3ef61a",
    endpoint: "https://kovan.infura.io/v3/6e8d4ffb6902406bb556135e343ef61a",
    bridgeContract: "0x59408f7e707233Ab08537736B2a4362997083012", //BRIDGE SMART CONTRACT ON ETH SIDE
    oracleAccount: "0xeC2f308F7cC266D207af1b1b10a1a3A5966c208b",
    privateKey: "", //PRIVATE KEY OF ORACLE ACC
  },
};

//TO RUN CONFIG

// node oracle-eos.js
// node oracle-eth.js

// Oracle accounts must be registered using the regoracle (EOSIO) or regOracle (Ethereum) functions.
