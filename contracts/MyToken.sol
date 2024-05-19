// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyCollectibles is ERC1155 {
    constructor() ERC1155("https://raw.githubusercontent.com/JLDSjr/metadata_blockchain/main/{id}.json") {
        _mint(msg.sender, 1 /* Id mayores */, 10 /* Cantidad */, "");
        _mint(msg.sender, 2 /* Id adolescentes    */, 20 /* Cantidad */, "");
        _mint(msg.sender, 3 /* Id comida      */, 20 /* Cantidad */, "");
    }
}