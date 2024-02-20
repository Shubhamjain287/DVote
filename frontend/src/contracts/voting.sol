// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {

    struct Candidate {
        uint id;
        string name;
        uint votes;
    }

    mapping(uint => Candidate) public candidates;

    mapping(address => bool) public hasVoted;

    event VoteCasted(address indexed voter, uint candidateId);

    address public admin;

    uint[] public candidateIds;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    constructor() {
        admin = msg.sender;

        addCandidate("Shubham");
    }

    function addCandidate(string memory _name) public onlyAdmin {
        uint candidateId = candidateIds.length + 1;
        Candidate storage newCandidate = candidates[candidateId];
        newCandidate.id = candidateId;
        newCandidate.name = _name;
        newCandidate.votes = 0;

        candidateIds.push(candidateId);
    }

    function vote(uint _candidateId) public {
        require(_candidateId > 0 && _candidateId <= candidateIds.length, "Invalid candidate ID");
        require(!hasVoted[msg.sender], "You have already voted");

        candidates[_candidateId].votes++;
        hasVoted[msg.sender] = true;

        emit VoteCasted(msg.sender, _candidateId);
    }

    function getVotes(uint _candidateId) public view returns (uint) {
        require(_candidateId > 0 && _candidateId <= candidateIds.length, "Invalid candidate ID");
        return candidates[_candidateId].votes;
    }

    function getCandidateIds() public view returns (uint[] memory) {
        return candidateIds;
    }
}
