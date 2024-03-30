import { useContract } from '@/hooks/useContract';
import { bn } from 'fuels';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function Proposalsample({name,description,time,pid}) {
  const contract = useContract();
  const formattedTime = new Date(time).toLocaleString();
  const [yesVote,setYesvote] = useState(0);
  const [noVote,setNovote] = useState(0)
  const voteforFavour = async () => {
    await contract.contract?.functions.vote(true,bn(pid-1),bn(1)).call();
    toast.success("Sucessfully Voted for favour")
  }

  const voteAgainst = async () => {
    await contract.contract?.functions.vote(false,bn(pid-1),bn(1)).call();
    toast.success("Sucessfully Voted for against")
  }

  const fetchProposals = async () => {
    if(contract && pid){
    const { value } = await contract.contract?.functions.proposal(bn(pid-1)).get() ?? {};
      if(value != undefined){
    setYesvote(value.yes_votes.words[0])
    setNovote(value.no_votes.words[0])
      }
      else{
        setNovote(0)
        setYesvote(0)
      }
    }
  }

  useEffect(()=>{
    fetchProposals()
  })

  return (
    <div className='border border-black bg-[#f8f3e7] rounded-xl w-[650px]  h-[240px] m-[0px]'>
    <div className='flex flex-row  p-[10px] px-[25px]'>
        <div className='flex flex-col w-full'>
        <p className='text-[15px] text-gray-500'>Proposal no #{pid ? pid : 0}</p>
        <p className='pt-[8px] font-semibold text-[22px]'>{name}</p>
        <p className='text-[14px] text-gray-500'>kx7f....6zi9</p>
        </div>
      <div className='flex w-full p-[30px] text-[14px] justify-end'>
        <p className=''>{formattedTime}</p>
      </div>
    </div>
      <div className='py-[30px] border-black border-b px-[25px]'>
        <p>{description}</p>
      </div>
      <div className='flex h-[48px]'>
      <div onClick={()=> voteforFavour()} className='bg-[#8cd4f7] border-r-2 border-black font-semibold flex flex-col justify-center items-center hover:bg-[#4DC5D7] w-[50%] cursor-pointer rounded-bl-xl'>
        <p className=''>{yesVote}</p>
        <p className=''>In Favour</p>
      </div>
      <div onClick={()=> voteAgainst()} className='bg-[#DBEFF9] flex flex-col justify-center font-semibold items-center w-[50%] hover:bg-[#83b5f2] cursor-pointer rounded-br-xl'>
        <p className=''>{noVote}</p>
        <p>Against</p>
      </div>
      </div>
    </div>
  )
}

export default Proposalsample
