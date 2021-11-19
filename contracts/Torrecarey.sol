// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Torrecarey is ERC20 {
    string public name = "Torrecarey";
    string public symbol = "TRCY";
    uint public decimals = 18;
    uint public INITIAL_SUPPLY = 21000000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
