import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";
import * as dotenv from "dotenv";
dotenv.config();

const SEPOLIA_RPC = process.env.ARBITRUM_SEPOLIA_RPC || "";
const PK = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
    arbitrumSepolia: {
      url: SEPOLIA_RPC,
      accounts: PK ? [PK] : [],
    },
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v6",
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: process.env.ETHERSCAN_API_KEY || "",
    }
  }
};

export default config;
