const MainContract = artifacts.require('MainContract');
const OtherContract = artifacts.require('OtherContract');

module.exports = function(deployer) {
    const asyncDeployer = async() => {
        await deployer.deploy(OtherContract);
        await deployer.deploy(MainContract, OtherContract.address);
    }
    deployer.then(asyncDeployer);
}

