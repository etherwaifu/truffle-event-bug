pragma solidity ^0.4.21;

import "./OtherContract.sol";

contract MainContract {
    OtherContract public otherContract;
    event SomethingHappenedInMainContract();
    function MainContract(address _otherContract) public {
        otherContract = OtherContract(_otherContract);
    }
    function callMe() public {
        emit SomethingHappenedInMainContract();
        otherContract.doSomething();
    }
}
