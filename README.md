# Instructions


## Requirements
- Node.js >= 8
- Install truffle globally with:
  ```shell
  npm install -g truffle
  ```
- Install Metamask extension for Chrome.

## Create a new Truffle project
We are using the [Vue Truffle box](https://www.trufflesuite.com/boxes/drizzle-vue-box).
- Create a new directory to unbox the truffle and `cd` into it:
  ```shell
  mkdir my-vue-app
  cd my-vue-app
  ```
- Unbox the Vue truffle box inside the new directory:
  ```shell
  truffle unbox vue-box
  ```
- Now you should see a `truffle-config.js` and the project structure specified in the
[vue box repo](https://github.com/truffle-box/vue-box) and the
[vue plugin](https://github.com/trufflesuite/drizzle/tree/develop/packages/vue-plugin#vue-plugin).
This file has the configuration to tell drizzle where it should create the `JSON` compiled contracts.
- Run `truffle develop` and you'll see a list of some accounts that you can use to develop locally and a `Mnemonic` to
import the `accounts[0]` account into Metamask
- Run `migrate` to compile the contracts and deploy them to localhost
- In another terminal go to the `./vapp` directory and run `npm run serve`
- Go to `http://localhost:8080/`
- If you installed Metamask it will ask you for your password, select import with recovery phrase
- Copy and paste the `Mnemoic` shown in the `truffle develop` console
- Create a new password
- Authorize the Vue app to connect your account
- You'll see ~100 ETH in the account and the address should match the first account of the accounts in the console
- You should see the Vue app and logo, if you see a console error, reload the page
- You can use the private keys from the console to import the other test accounts
- Add accounts and transfer a som TT's to an account
- What just happened?

## Development Setup

### Truffle
- Run `npm i` to install dependencies for the root project as well as 
for the `vapp` project
- Run `truffle develop` in the root
- You will enter the truffle environment and see a list of Accounts and Private Keys that can be used to import those
    accounts into Metamask
- Explain the `truffle-config.js` file
- Go through the contracts directory
- Explain the contracts Torrecarey extends from
- Explain Migrations contract
- Got through the `migrations` directory:
  - One executes migrations
  - The other one deploys the contracts
- Run `migrate`. This will compile the contracts inside the `contracts` directory into `JSON` files inside the
directory specified in the `truffle-config.js` file


### Vue-Drizzle
- See package.json
- Go through `vapp/src/drizzleOptions.js` and `src/main.js`
- See contracts directory, delete and re-run migrate
- Explain `App.vue` and components
- In another terminal tab, `cd` to the `vapp` directory and run `npm run serve`
- Remember to have the Metamask setup ready and got to `http://localhost:8080/`
- Import the owner account (`accounts[0]`, the one that deployed the contract) into Metamask

### Deploy 
- Download Ganache
- Create account in Infura
- Setup `truffle-config.js` to use ropsten
- Run:
  ```shell
  truffle migrate --network ropsten
  ```
- You'll need ETH from the faucet


### Interact with the contract
- You can send 10 ETH to any account using:
  ```js
  // Convert desired ETH amount to Wei
  let amount = web3.utils.toWei('10', 'ether');
  // Create transaction data
  let tx = { from: accounts[0], to: accounts[1], value: amount };
  // Execute the transaction
  web3.eth.sendTransaction(tx);
  ```
- To change deploy contracts:
  - Go to `2_deploy_contracts.js`
  - To `drizzleOptions.js`
  - Change Drizzle component names
  - Run `migrate --reset`


