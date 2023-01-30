const { ethers } = require("hardhat");
async function main() {
  const contractAddress = "0xCfaa6a9904179Ce2F987f8F3BDF6bDa03092e939";
  const contractInstance = await ethers.getContractAt("CustomERC3525", contractAddress);
  const tokenBalance1 = await contractInstance.tokenBalance(1);
  const tokenBalance2 = await contractInstance.tokenBalance(2);
  const tokenBalance3 = await contractInstance.tokenBalance(3);
  console.log(`balanceOf tokenId:1 ${ tokenBalance1.toNumber() }`);
  console.log(`balanceOf tokenId:2 ${ tokenBalance2.toNumber() }`);
  console.log(`balanceOf tokenId:3 ${ tokenBalance3.toNumber() }`);
  
}

main().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});