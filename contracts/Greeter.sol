// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;


contract Greeter {
    string private greeting;

    event GreetingChanged(string newGreeting);

    constructor(string memory _greeting) {
        greeting = _greeting;
        emit GreetingChanged(_greeting);
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
        emit GreetingChanged(_greeting);
    }
}
