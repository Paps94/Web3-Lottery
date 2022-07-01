import web3 from './web3';

const address = 'YOUR ADDRESS';
const abi = [];

export default new web3.eth.Contract(abi, address);
