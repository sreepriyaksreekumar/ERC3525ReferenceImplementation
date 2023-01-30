const { ethers } = require("hardhat");
async function main() {
    const contractAddress = "0xCfaa6a9904179Ce2F987f8F3BDF6bDa03092e939";
    const contractInstance = await ethers.getContractAt("CustomERC3525", contractAddress);
    const txReceipt = await contractInstance.exchangeTokenValue(1, 2, 100);
    console.log(txReceipt);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});