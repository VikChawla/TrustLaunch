// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
   
    
    function createCampaign(uint min) public {
        address newCampaign = new Campaign(min, msg.sender);
        deployedCampaigns.push(newCampaign);
        
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
    
    
}









contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    
    address public manager;
    uint public minContribution;
    uint public approversCount;
   
    mapping(address => bool) public approvers;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
   
    function Campaign(uint min, address creater) public {
        manager = creater;
        minContribution = min;
    }
   
    function invest() public payable {
        require(msg.value > minContribution);
       
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string desc, uint val, address rec) public payable restricted 
    {
        require(msg.sender == manager);
        Request memory req = Request({
            description: desc, 
            value: val, 
            recipient: rec,
            complete: false,
            approvalCount: 0
        });
            
        requests.push(req);
    }
    
    function approveRequest(uint reqIndex) public {
        Request storage request = requests[reqIndex];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
       
        request.approvals[msg.sender] == true;
        request.approvalCount++;
        
        
    }
    
    function finalizeRequest(uint reqIndex) public restricted{
        require(requests[reqIndex].complete == false);
        require(requests[reqIndex].approvalCount > (approversCount / 2));
        
        
        requests[reqIndex].recipient.transfer(requests[reqIndex].value);
        requests[reqIndex].complete = true;
        
    }
    
    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }
    
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}
