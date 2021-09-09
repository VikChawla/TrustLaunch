import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), '0x8FA8C9287a421eeD5bb1b3c010C46Ac8A4Ddca1f'
);

//export default instance

module.exports = instance