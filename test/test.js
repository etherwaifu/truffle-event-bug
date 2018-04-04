const MainContract = artifacts.require('MainContract');

contract('MainContract', function(accounts) {
  it('should succeeed', async() => {
    const contract = await MainContract.deployed();
    const result = await contract.callMe();
    console.log(result.logs); // it will show only event from MainContract
    throw new Error(); // but actually there are 2 events, 1 from MainContract and 1 from OtherContract
  });
});
