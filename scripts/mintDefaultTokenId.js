const { ethers } = require("hardhat");
async function main() {
  const [owner, addr1] = await ethers.getSigners();
  const contractAddress = "0xCfaa6a9904179Ce2F987f8F3BDF6bDa03092e939";
  const contractInstance = await ethers.getContractAt("CustomERC3525", contractAddress);
  const txReceipt1 = await contractInstance.mintDefault(owner.address, 1, 1000, owner.address, "0x21c0536dcD569db9334428FF08213543dBe4b234")
  const txReceipt2 = await contractInstance.mintDefault(addr1.address, 1, 1000, addr1.address, "0x21c0536dcD569db9334428FF08213543dBe4b234")
  console.log(txReceipt1, txReceipt2);
}

main().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});