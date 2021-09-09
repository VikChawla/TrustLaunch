//used to setup dynamic routes because of different contract addresses
const routes = require('next-routes')();


routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')//: allows for wildcard -> tells us that address is going to be a wild card


module.exports = routes; //routes contains link tags