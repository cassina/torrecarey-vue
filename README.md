## Requirements

- Node.js >= 8
- Install truffle globally with:
  ```shell
  npm install -g truffle
  ```
- Install Metamask extension for Chrome, create/import an account and set Metamask to use localhost in port 9545

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

## Development Setup

- Run `npm i` to install dependencies for the root project as well as 
for the `vapp` project
- Run `truffle develop` in the root
- You will enter the truffle environment and see a list of Accounts and Private Keys
- Run `migrate`. This will compile the contracts inside the `contracts` directory into `JSON` files inside the
directory specified in the `truffle-config.js` file
- cd or open another terminal tab and cd into the `vapp` directory and run `npm run serve`
- cd to the vapp directory and install tailwind with `npm install vue-tailwind`
- Remember to have the Metamask setup ready and got to `http://localhost:8080/`

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
The account can be one of the accounts created by the `truffle develop` command or an account created in Metamask,
it should be connected to `localhost`

You should see something like this in Metamask (try to change network and back to localhost if you don't see the changes): 

![](../../../../../var/folders/cp/hr9c_kp55l1cxl5h3dctm_j00000gn/T/TemporaryItems/NSIRD_screencaptureui_6sicmi/Screen Shot 2021-11-14 at 11.57.06.png)
