const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the contract factory
  const NFTContract = await ethers.getContractFactory("MorphNFT");

  // Deploy the contract
  const nft = await NFTContract.deploy();

  // Log the contract address
  console.log("NFT Contract deployed to:", nft.target); // Use .target to get the deployed address in Ethers.js v6
}

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
