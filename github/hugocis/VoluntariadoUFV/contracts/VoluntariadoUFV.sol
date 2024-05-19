// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract VoluntariadoUFV is ERC1155, Ownable, ERC1155Pausable {

    uint256 private constant OLD = 1;  // TOKEN POR AYUDAR A GENTE MAYOR
    uint256 private constant YOUNG = 2; // TOKEN POR AYUDAR A NIÑOS/ADOLESCENTES EN RIESGO DE EXCLUSIÓN SOCIAL
    uint256 private constant FOOD = 3; // TOKEN POR AYUDAR A GENTE SIN TECHO PROPORCIONANDO COMIDA


    constructor(address initialOwner)
        ERC1155("https://raw.githubusercontent.com/JLDSjr/metadata_blockchain/main/{id}.json")
        Ownable(initialOwner)
    {
        _mint(msg.sender, OLD /* Id mayores */, 10 /* Cantidad */, "");
        _mint(msg.sender, YOUNG /* Id adolescentes    */, 20 /* Cantidad */, "");
        _mint(msg.sender, FOOD /* Id comida      */, 20 /* Cantidad */, "");
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }

    // The following functions are overrides required by Solidity.

    function _update(address from, address to, uint256[] memory ids, uint256[] memory values)
        internal
        override(ERC1155, ERC1155Pausable)
    {
        super._update(from, to, ids, values);
    }
}
