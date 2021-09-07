const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
  'danger first lumber boost sense slot stamp hill clerk surge hobby fragile',
  'https://rinkeby.infura.io/v3/83c659497bd24b9e93a89f8688e9d932'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);
  
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

    console.log("Contract deployed to", result.options.address);
};
deploy();

//0x30356d2740E34927183ab523E298eF6DdB4adB87 contract