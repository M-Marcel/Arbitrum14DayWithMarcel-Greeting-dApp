import { ethers } from "hardhat";

async function main() {
  // 1. Get factory, deploy with initial greeting
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Arbitrum!");

  // 2. Wait for deployment tx to be mined
  const deploymentTx = greeter.deploymentTransaction();
  if (deploymentTx) {
    await deploymentTx.wait();
  } else {
    throw new Error("Deployment transaction is null.");
  }

  console.log("✅ Greeter deployed to:", (await greeter.getAddress()));
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
