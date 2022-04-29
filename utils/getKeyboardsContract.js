import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x092E0A7762532a3E9ea7f6af1c5B8aB067a40e1f';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
