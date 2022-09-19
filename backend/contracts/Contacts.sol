// SPDX-License-Identifier: UND
pragma solidity >=0.4.22 <0.9.0;



contract Contacts {
    struct User {
        uint salaryId;
        string name;
        string userAddress;
        uint salary;
    }
    User[] public users;

    function addUser(uint _salaryId, string memory _name, string memory _userAddress, uint _salary) public returns(uint) {
        // users.length++;
        users[users.length].salaryId = _salaryId;
        users[users.length].name = _name;
        users[users.length].userAddress = _userAddress;
        users[users.length].salary = _salary;
        return users.length;
    }

    function getUsersCount() public view returns(uint) {
        return users.length;
    }

    function getUser(uint index) public view returns(uint, string memory, string memory, uint) {
        return (users[index].salaryId, users[index].name, users[index].userAddress, users[index].salary);
    }
}