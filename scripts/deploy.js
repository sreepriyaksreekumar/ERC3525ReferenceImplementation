const { ethers } = require("hardhat");
async function main() {
  const [owner] = await ethers.getSigners();
  const CustomERC3525 = await ethers.getContractFactory("CustomERC3525");
  const customERC3525 = await CustomERC3525.deploy(owner.address);
  customERC3525.deployed();
  console.log(`CustomERC3525 deployed to ${customERC3525.address}`);
}

main().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});