require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs")
const privatekey = fs.readFileSync(".secret").toString
const projectId = "f963219dc887a30fc846e1189f0969f57cdc9ab0"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${projectId}`,
      accounts: [privatekey]
    },
    mainnet: {
      url: `https://rpc-mainnet.maticvigil.com/v1/${projectId}`,
      accounts: [privatekey]
    }
  },
  solidity: "0.8.17",
};
