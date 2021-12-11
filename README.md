# Web3-Lottery
Second Web3/Solidity project of hopefully many, that aid me in getting hands on experience on decentralised applications. This is a lottery contract mimicing the traditional lottery process but instead it's automated through a Smart Contract!

##Few questions to ask yourself..

Is this the right way to do things in a professional/production environment?
  `Still a NO. There are much better ways of doing things which I will focus on in my next side projects! Next one will also include a front-end with React!`

Then what is the point of this project?
  `As mentioned above, we all need to start from somewhere. This projects aim to help me and whoever is interested in learning about Web3 what a very basic setup for a decentralized app can look like. Having said that this project digs a little deeper into a solidity Contract seeing the use of mappings instead of arrays which should avoided as much as possible due to costs among other thigns!`

How do I then test this?
  `Below you will find a basic setup guide. I will not go through everything, like how to set up MetaMask, or how to make an Infura account cause there are many great content creators out there with step by step guides. I will though provide some things to look out for to save you some trouble!`


---------------------------------------------------------------------------------------------------------------------------------------------------------------
##Setup..

After cloning the repository and directing yourself to it you will need to do a few things!

```sh
npm init
```

```sh
npm install
```
<code>
solc - Solidity compiler
mocha - JavaScript test framework running on NodeJS
ganache-cli - part of the Truffle suite of Ethereum development tools, is the command line version of Ganache, your personal blockchain for Ethereum development
@truffle/hdwallet-provider- HD Wallet-enabled Web3 provider. Use it to sign transactions for addresses derived from a 12 or 24 word mnemonic
</code>

```sh
npm install solc web3 mocha ganache-cli @truffle/hdwallet-provider
```

Make sure your test script in the package.json file is
  ```js
    "test": "mocha"
  ```

In deploy.js you need to update the provider with your own Metamask Mnemonic and Infura URL
```js
provider = new HDWalletProvider(
  'YOUR_METAMASK_MNEMONIC',
  'YOUR_INFURA_URL'
);
```

<h3>Note</h3>
  At the point of writing this. If you lost your MetaMask Mnemonic the only thing you can do is remove the extension all together and start again and for the love of God and all that is holy please make sure you are <bold>NOT</bold> on the Mainnet and instead you are on a testnet like Rinkeby! VERY IMPORTANT!!!

  When creating your infura account make sure you switch away from the Mainnet and into the Rinkeby Network

Then you need to run the compile script using the Javascript file called 'compile'
```sh
node compile.js
```

The deploy script using.. you guessed it the js file called 'deploy' (which is where you updated your infura link to Rinkbey and Metamask Mnemonic also switched to Rinkeby)
```sh
node deploy.js
```

That should generate the following:
  `Attempting to deploy from account 0x438...`

Followed by a
  `Contract deployed to 0x8643...`

You can then go to:
  -> <code> https://rinkeby.etherscan.io/ </code>

  enter the address you just got and search for the contract

If you want to then test the Contract then what you have to do is go to
  - <code> http://remix.ethereum.org </code>
  - Create a new file and call it "Inbox.sol"
  - Paste the content of Inbox.sol to the newly created file
  - Go to "Deploy & run transactions"
  - Make sure you select "Injected Web3" (then a metamask verification will appear just accept to connect)
  - Your Metamask account should appear under "Account"
  - Almost there hang on.. at "At Address" you will paste there the address of the contract and click the "At address" button

If everything went smoothly you should be able to see the deployed contract under "Deployed Contracts"

You can click message which will give you the currently set message or you can enter a new one yourself (a metamask modal will pop up).
After doing that you can go back to Etherscan and see your transaction and/or retrieve your new message!

Oh forgot to mention that if you want some FAKE ether for your testing cause setting a new message will cost you gas you need to do the following:

Go to:
  -> <code> https://faucets.chain.link/rinkeby </code>

    Enter your wallet address (testnet account address) - Metamask
    Check 0.1 test ETH
    Uncheck 10 test LINK
    Check the I am Not a Robot verification (if you are not one :D )
    Click Send Request

Do this a couple of times to get some FAKE ether sent to your Metamask

## License
MIT
