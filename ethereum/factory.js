import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), '0x30356d2740E34927183ab523E298eF6DdB4adB87'
);

//export default instance

module.exports = instance