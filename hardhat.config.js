require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    morphL2: {
      url: "https://rpc-quicknode-holesky.morphl2.io",
      accounts: [
        `0xa77868cba9d67ed2854547cdebb3e30c52cabaa1c4646beef008e786c811c5fc`,
      ], // Store your private key in .env file for security
    },
  },
};
