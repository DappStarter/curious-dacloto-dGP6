require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note muscle cluster hockey knife bridge genius'; 
let testAccounts = [
"0xc1a4e426479f3c683f47cac48bb272a35163789fcf39b9d3534b7398869a59d6",
"0x3ff5da1ad91125305e5ea94edebf9ef1a8fa022824e6287f5304f0c87fe41a71",
"0x0c9a27ad2276ae37558ff7479ecaa3c569f02655ffdcfd3d323714a603adfe02",
"0x605aa640e3aef55fbdd5896f79c5097fd7ca338900c14bb949e12894a641ee3b",
"0xbc85715fe121af7b72d5c18168cc9182b6696341c6a9dea3b13f4bf0110c8de0",
"0x4222b4f656dbf77530108abeeab19056234391197aef4370266a39ac2b63b9c8",
"0xeec1f8439eae491a522da24eaa150b7bb6d2d9ecf73f7f361ed6298c91ca009d",
"0x2cc8525f2c6ad7c478194c6de4325c9d64528d068bfe71cd23946737771e06d8",
"0x3b33142550d53abf6b67ad4f5e6c8651bb70c4dcb3b6f856949f9d81b4cba47f",
"0x993215b4d2bd8f8423c6e481df28862f380f6b830d8b1e66ad18211035ac97de"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

