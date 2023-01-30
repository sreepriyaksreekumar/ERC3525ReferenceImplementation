const { ethers } = require("hardhat");
async function main() {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const contractAddress = "0xCfaa6a9904179Ce2F987f8F3BDF6bDa03092e939";
    const contractInstance = await ethers.getContractAt("CustomERC3525", contractAddress);
    const txReceipt = await contractInstance.connect(addr1).transferOwnership(addr1.address, addr2.address, 2);
    console.log(txReceipt);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});