import { NODE_URL } from "@/lib";
import { TestContractAbi, TestContractAbi__factory } from "@/sway-api";
import { Provider, Wallet, WalletUnlocked } from "fuels";
import { useState } from "react";
import useAsync from "react-use/lib/useAsync";
import { useActiveWallet } from "./useActiveWallet";
import contractIds from "@/sway-api/contract-ids.json";

const contractId = contractIds.testContract;
const hasContract = process.env.NEXT_PUBLIC_HAS_CONTRACT === "true";
export const useContract = () => {
  const [contract, setContract] = useState<TestContractAbi>();
  const { wallet, walletBalance, refreshWalletBalance } = useActiveWallet();

  useAsync(async () => {
    if (hasContract && wallet) {
        const testContract = TestContractAbi__factory.connect(contractId, wallet);
        setContract(testContract);
      }
    }, [wallet]);

  return {
    contract,
  };
};
