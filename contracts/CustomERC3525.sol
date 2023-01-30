// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@solvprotocol/erc-3525/ERC3525.sol";

contract CustomERC3525 is ERC3525 {
    using Strings for uint256;
    address public owner;

    constructor(address owner_)
        ERC3525("CustomERC3525", "C_ERC3525", 18)
    {
        owner = owner_;
    }

    struct Report {
        address owner;
        address issuer;
        string tokenStatus;
        string metadataHash;
    }

    mapping(uint256 => Report) reports;

    function mintCustom(
        address to_,
        uint256 tokenId_,
        uint256 slot_,
        uint256 amount_,
        address issuer_,
        string memory metadataHash_
    ) external {
        require(
            msg.sender == owner,
            "only owner can mint"
        );
        _mint(to_, tokenId_, slot_, amount_);
        reports[tokenId_].owner = to_;
        reports[tokenId_].issuer = issuer_;
        reports[tokenId_].tokenStatus= "active";
        reports[tokenId_].metadataHash = metadataHash_;
    }

    function mintDefault(
        address to_,
        uint256 slot_,
        uint256 amount_,
        address issuer_,
        string memory metadataHash_
    ) external {
        require(
            msg.sender == owner,
            "only owner can mint"
        );
        uint256 tokenId_ = _mint(to_, slot_, amount_);
        reports[tokenId_].owner = to_;
        reports[tokenId_].issuer = issuer_;
        reports[tokenId_].tokenStatus= "active";
        reports[tokenId_].metadataHash = metadataHash_;
    }

    function transferFractionalOwnership(uint256 tokenId_, address to_, uint256 value_) external {
        require(msg.sender == ownerOf(tokenId_), "Only token owner can transfer ownership");
        transferFrom(tokenId_, to_, value_);
    }

    function transferOwnership(address from_, address to_, uint256 tokenId_) external {
        require(msg.sender == ownerOf(tokenId_), "Only token owner can transfer ownership");
        transferFrom(from_, to_, tokenId_);
    }

    function exchangeTokenValue(uint256 fromTokenId_, uint256 toTokenId_, uint256 value_) external {
        require(msg.sender == ownerOf(fromTokenId_), "Only token owner can exchange token value");
        transferFrom(fromTokenId_, toTokenId_, value_);
    }

    function tokenBalance(uint256 tokenId_) external view returns(uint256) {
        return balanceOf(tokenId_);
    }

    function approveTokenAccess(uint256 tokenId_, address to_, uint256 value_) external {
        approve(tokenId_, to_, value_);
    }

    function approveAllTokensAccess (address to_, uint256 tokenId_) external {
        approve(to_, tokenId_);
    }
}
