const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "harbor install escape symptom phrase extend evolve cause clinic puzzle claw era",
  "https://rinkeby.infura.io/v3/81163e6c950b411b97443686604f6112"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const res = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode })
    .send({ from: accounts[0], gas: "1000000", gasPrice: "2000000000" });

  console.log(interface);
  console.log("contract deployed to ", res.options.address);
};
deploy();

123;
