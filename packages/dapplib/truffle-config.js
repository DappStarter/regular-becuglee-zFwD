require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth maze property install derive bone slender'; 
let testAccounts = [
"0x606fe9c640aaa2a0134057024cacb39ae6ad4ad8c14be1468b404e0a701b88d1",
"0x050a19bf08411fe23794e03e9a59973834b7609d8831c1b6916d190d5b3cac46",
"0xe37f744470ce00544f962757bc3799943b20f7b5d891a37b004b9071edc87b63",
"0xe1cbcca01a6c62685e5bda96f8444fed444d35b95d5241270332fb0f3f56e053",
"0xaeea4c733f67c9114c03befba93d2a7461c72874d954af0135f2fa3a79a38163",
"0x48a157f98dca7622ba6b482b1ef1fa728fac3706220b85cde66f00be75ae5712",
"0xb13f6f162696ce6982249d3863b7c9d394a4a27f4fe1fb5e45c4d241f785720f",
"0x7b2e13ef6938abacf314f06bc4008f99ba0b41187999da50149937cd7815277c",
"0x05d0c6f4efe25900e4be4274d6c75b7029ad55dd360db28e0dd16bdc23026c17",
"0x65432d2908180dd20573066380e6c0b2edd8b8fb3aad1c20a21c214ad63e4a5e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

