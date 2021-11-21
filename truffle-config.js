const path = require('path')
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = '';
const endpointUrl = '';
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "vapp/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
            //private keys array
            privateKey,
            //url to ethereum node
            endpointUrl
        )
      },
      gas: 4500000,
      gasPrice: 10000000000,
      network_id: 3
    }
  }
};
