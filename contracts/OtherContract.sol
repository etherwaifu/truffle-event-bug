pragma solidity ^0.4.21;

contract OtherContract {
    event SomethingHappenedInOtherContract();
    function doSomething() public {
        emit SomethingHappenedInOtherContract();
    }
}

