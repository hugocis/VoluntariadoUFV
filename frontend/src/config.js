import { ethers } from 'ethers';

// Conectar a la red de Sepolia a través de Infura o MetaMask
let provider;
if (window.ethereum) {
  provider = new ethers.BrowserProvider(window.ethereum);
} else {
  provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/bd7fd477adc54648a4ba49b984d096cd');
}

export { provider };
