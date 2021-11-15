import Web3 from "web3";

const address = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

const NODE_URL = "https://bsc-dataseed.binance.org/";

let web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));
address.forEach((address) => {
  web3.eth.getBalance(address).then((i) => console.log(address + " " + i));
});
