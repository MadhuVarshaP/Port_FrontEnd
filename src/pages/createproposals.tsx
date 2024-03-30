import { useActiveWallet } from '@/hooks/useActiveWallet';
import { useContract } from '@/hooks/useContract';
import { useAccount } from '@fuel-wallet/react';
import { addDoc, collection } from 'firebase/firestore';
import { bn } from 'fuels';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoMdClose } from "react-icons/io";
import {db} from '../config/firebase'
import { useSearchParams } from 'next/navigation';

function createproposal()  
{  
  const { account } = useAccount();
  const { wallet, walletBalance, refreshWalletBalance } = useActiveWallet();
  const [name,setName] = useState('');
  const [description,setDescription] = useState("");
  const [acceptencePercentage,setAcceptencePercentage] = useState(0);
  const [date,setDate] = useState("");
  const [proposalCount,setProposalCount] = useState()
  let route = useRouter();
  const contract = useContract();
  const searchParams = useSearchParams();

  const Pid = searchParams.get("id");
  console.log(Pid,"p")

  function convertToTimestamp(normalDateTime:any) {
    // Split the normal date with time string into date and time components
    const [datePart, timePart] = normalDateTime.split(' ');

    // Split the date into day, month, and year
    const [day, month, year] = datePart.split('/');
    console.log(timePart)
    // Split the time into hour, minute, and second
    const [hour, minute, second] = timePart.split(':');

    // Create a new Date object using the parsed values
    const date = `${year}-${month}-${day}T${hour}:${minute}:${second}`;
    console.log(date)

    return date;
}

    const handleCreateProposal = async ()  => {
      const docRef = await addDoc(collection(db, "proposals"), {
        name: name, 
        pid: Pid,   
        description: description,
        acceptencePercentage: acceptencePercentage,
        date: convertToTimestamp(date),
      });
        if (!contract) {
          return toast.error("Contract not loaded");
        }
    
        if (walletBalance?.eq(0)) {
          return toast.error(
            "Your wallet does not have enough funds. Please click the 'Top-up Wallet' button in the top right corner, or use the local faucet.",
          );
        }
    
        await contract.contract?.functions.create_proposal(bn(acceptencePercentage),bn(Date.parse(convertToTimestamp(date)))).call();
        const count = await contract.contract?.functions.proposal_count().get();
        console.log(count,"count")
        // setProposalCount(count);
    
        await refreshWalletBalance?.();
        toast.success("Sucessfully Created the proposal")
        route.push('/proposals');
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
        <div className='p-[25px]'>
            <p className='py-[15px]'>Enter Proposal Name</p>
            <input value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='ShipitDAO' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[15px]'>Description</p>
            <textarea value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Solidity to Java Translator？ Can We Convert Solidity file to Java file and which Blockchain in scalable for metaverse ?' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[15px]'>What is the Acceptence percentage</p>
            <input value={acceptencePercentage} onChange={(e)=> setAcceptencePercentage(e.target.valueAsNumber)} type='number' placeholder='90' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[15px]'>When is the Proposal Done</p>
            <input value={date} onChange={(e)=> setDate(e.target.value)} type='text' placeholder='29 March 2024' className='rounded-xl w-[600px] p-[7px]'/>
            <div className='flex justify-center my-[35px]'>
              <button onClick={() => handleCreateProposal()} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[200px] flex justify-center hover:font-medium'>Create Proposal</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default createproposal
