import toast, { Toaster } from "react-hot-toast";
import { Link } from "./Link";
import { Button } from "./Button";
import { NODE_URL } from "@/lib";
import { useConnectUI, useDisconnect } from "@fuel-wallet/react";
import { WalletDisplay } from "./WalletDisplay";
import { useBrowserWallet } from "@/hooks/useBrowserWallet";
import { useActiveWallet } from "@/hooks/useActiveWallet";
import { useFaucet } from "@/hooks/useFaucet";
import Head from "next/head";
import { useRouter } from "next/router";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { faucetWallet } = useFaucet();

  const {
    wallet: browserWallet,
    walletBalance: isBrowserWalletConnected,
    network: browserWalletNetwork,
  } = useBrowserWallet();

  const { connect } = useConnectUI();
  const { disconnect } = useDisconnect();
  const router = useRouter();

  const { wallet, refreshWalletBalance, walletBalance } = useActiveWallet();

  const topUpWallet = async () => {
    if (!wallet) {
      return console.error("Unable to topup wallet because wallet is not set.");
    }

    if (!faucetWallet) {
      return toast.error("Faucet wallet not found.");
    }

    const tx = await faucetWallet?.transfer(wallet.address, 2_000_000_000);
    await tx?.waitForResult();

    toast.success("Wallet topped up!");

    await refreshWalletBalance?.();
  };

  const showTopUpButton = walletBalance?.lt(1_000_000_000);

  const showAddNetworkButton =
    browserWallet &&
    browserWalletNetwork &&
    browserWalletNetwork?.url !== NODE_URL;

  const tryToAddNetwork = () => {
    return alert(
      `Please add the network ${NODE_URL} to your Fuel wallet, or swtich to it if you have it already, and refresh the page.`,
    );
  };


  return (
    <>
      <Head>
        <title>Fuel App</title>
        <link rel="icon" href="/fuel.ico" />
      </Head>
      <Toaster />
      <div className="flex flex-col">
        <nav className="flex justify-between absolute w-full items-center p-4 px-12 bg-black text-white gap-6">
        <Link href="/" className={router.pathname === '/' ? 'text-white bg-[#2DA2B5] px-4 py-2 rounded' : 'text-[#2DA2B5] px-4 py-2 rounded'}>   
                    Home
            </Link>
            <Link href="/proposals" className={router.pathname === '/proposals' ? 'text-white bg-[#2DA2B5] px-4 py-2 rounded' : 'text-[#2DA2B5] px-4 py-2 rounded'}>
                    Proposals
            </Link>
            <Link href="/events" className={router.pathname === '/events' ? 'text-white bg-[#2DA2B5] px-4 py-2 rounded' : 'text-[#2DA2B5] px-4 py-2 rounded'}>
                    Events
            </Link>
            <Link href="/profilePage" className={router.pathname === '/profilePage' ? 'text-white bg-[#2DA2B5] px-4 py-2 rounded' : 'text-[#2DA2B5] px-4 py-2 rounded'}>
                    Profile
            </Link>

  

          <div className="flex ml-auto space-x-2">
          {isBrowserWalletConnected && (
            <Button className="bg-[#2DA2B5]" onClick={disconnect}>Disconnect Wallet</Button>
          )}
          {!isBrowserWalletConnected && (
            <Button  className="bg-[#2DA2B5]" onClick={connect}>Connect Wallet</Button>
          )}

          {showAddNetworkButton && (
            <Button onClick={tryToAddNetwork} className="bg-red-500">
              Wrong Network
            </Button>
          )}
            <WalletDisplay />
          </div>

          {showTopUpButton && (
            <Button onClick={() => topUpWallet()}>Top-up Wallet</Button>
          )}
        </nav>

        <div className="min-h-screen items-center p-24 flex flex-col gap-6">
          {children}
        </div>
      </div>
    </>
  );
};
