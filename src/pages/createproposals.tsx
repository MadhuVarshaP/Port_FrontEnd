import { useActiveWallet } from '@/hooks/useActiveWallet';
import { useContract } from '@/hooks/useContract';
import { bn } from 'fuels';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoMdClose } from "react-icons/io";

function createproposal()  
{  
  const { wallet, walletBalance, refreshWalletBalance } = useActiveWallet();
  const [name,setName] = useState('');
  const [description,setDescription] = useState("");
  const [acceptencePercentage,setAcceptencePercentage] = useState(0);
  const [date,setDate] = useState("");
  let route = useRouter();
  const contract = useContract();


    const handleCreateProposal = async ()  => {
        if (!contract) {
          return toast.error("Contract not loaded");
        }
    
        if (walletBalance?.eq(0)) {
          return toast.error(
            "Your wallet does not have enough funds. Please click the 'Top-up Wallet' button in the top right corner, or use the local faucet.",
          );
        }
    
        await contract.contract?.functions.create_proposal(bn(acceptencePercentage),bn(Date.parse(date))).call();
        const count = await contract.contract?.functions.proposal_count().get();
        console.log(count,"count")
    
        await refreshWalletBalance?.();
    }

    const handleBack = () => {
      route.push('/proposals');
    }
  return (
    <div className='flex justify-center'>
    <div className='flex flex-col w-[700px] rounded-xl bg-[#DBEFF9] m-[30px]  h-[800px]'>
      <div onClick={() => handleBack()}>
        <IoMdClose size={25} className='ml-auto m-3 z-20 cursor-pointer'/>
        </div>
        <div className='flex justify-center'>
            <p className='text-[40px]'>Create Proposal</p>
        </div>
        <div className='p-[20px]'>
            <p className='py-[10px]'>Enter Proposal Name</p>
            <input value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='ShipitDAO' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[10px]'>Description</p>
            <textarea value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Solidity to Java Translator？ Can We Convert Solidity file to Java file and which Blockchain in scalable for metaverse ?' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[10px]'>What is the Acceptence percentage</p>
            <input value={acceptencePercentage} onChange={(e)=> setAcceptencePercentage(e.target.valueAsNumber)} type='number' placeholder='90' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[10px]'>When is the Proposal Done</p>
            <input value={date} onChange={(e)=> setDate(e.target.value)} type='text' placeholder='29 March 2024' className='rounded-xl w-[600px] p-[7px]'/>
            <div className='flex justify-center my-[20px]'>
              <button onClick={() => handleCreateProposal()} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[200px] flex justify-center hover:font-medium'>Create Proposal</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default createproposal
