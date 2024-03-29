'use client'

import type { TestContractAbi } from "@/sway-api";
import { TestContractAbi__factory } from "@/sway-api";
import contractIds from "@/sway-api/contract-ids.json";
import { useState } from "react";
import { useActiveWallet } from "@/hooks/useActiveWallet";
import useAsync from "react-use/lib/useAsync";
import { useRouter } from 'next/navigation'
import shipping from "../images/pana.jpg"
import Image from "next/image";

const contractId = contractIds.testContract;

const hasContract = process.env.NEXT_PUBLIC_HAS_CONTRACT === "true";
const hasPredicate = process.env.NEXT_PUBLIC_HAS_PREDICATE === "true";
const hasScript = process.env.NEXT_PUBLIC_HAS_SCRIPT === "true";

export default function Home() {
  const { wallet, walletBalance, refreshWalletBalance } = useActiveWallet();
  const [contract, setContract] = useState<TestContractAbi>();
  const [counter, setCounter] = useState<number>();
  const router = useRouter()


  useAsync(async () => {
    if (hasContract && wallet) {
      const testContract = TestContractAbi__factory.connect(contractId, wallet);
      setContract(testContract);
    }
  }, [wallet]);

  const handleNext = () => {
    router.push('/page');
  }
  

  return (
    <>
       <div className='flex items-center justify-end'>
        <div className='px-[100px]'>
            <p className='text-[40px] font-bold w-[800px]'>All Aboard! Let's Learn, Build and Ship Together to Build Products for the World</p>
            <p className='w-[800px] py-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam omnis necessitatibus incidunt aliquam sed nesciunt dignissimos accusamus eius repellat perspiciatis laudantium, nulla dolores, fugiat dolor neque fuga facilis repudiandae.</p>
            <button onClick={() => handleNext()} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[120px] flex justify-center hover:font-bold'> JOIN US </button>
        </div>
        <div className='flex justify-end items-center mx-0'>
          <Image src={shipping} alt='shipimg' className='h-[90vh] w-[700px]' />
        </div>
        
    </div>
    </>
  );
}
