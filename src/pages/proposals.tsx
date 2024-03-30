import React, { useEffect, useState } from 'react'
import Proposalsample from '../components/Proposalsample'
import Accepted from '../components/Accepted'
import Rejected from '../components/Rejected'
import { useRouter } from 'next/router'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { useAsync, useScratch } from 'react-use'
import { useContract } from '@/hooks/useContract'
import { BaseAssetId, bn } from 'fuels'

function Proposals() {
    const router = useRouter()
    const [proposals,setProposal] = useState([]);
    const [proposalCount,setProposalCount] = useState<BN | undefined>()
    const contract = useContract();
    const [isOnGoing, setIsOnGoing] = useState(true);

  const toggleStatus = () => {
    setIsOnGoing(prevState => !prevState);
  };
    const fetchProposal = async () => {
       
      await getDocs(collection(db, "proposals"))
          .then((querySnapshot)=>{               
              const newData:any = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setProposal(newData);                
              
          })
     
  }

  const fetchCount = async () => {
    if(contract){
    const { value } = await contract.contract?.functions.proposal_count().get() ?? {};
      if(value != undefined){
    console.log(value.words[0],"count")
    setProposalCount(value.words[0])
      }
      else{
        setProposalCount(undefined)
      }
    }
  }
  
  useEffect(()=>{
    fetchCount();
  })
  useEffect(()=>{
    fetchProposal();
    
},[])
const currentDate = new Date();
  return (
    <div>
        
        <div className='m-[60px] mx-[200px] flex flex-row justify-between'>
          <p className='text-[40px] font-bold'>Proposals</p>

          <div className='flex items-center mx-[30px] my-[8px]'>
            <div className=' flex rounded-3xl border-black border-[1px] cursor-pointer mr-4'>
              <p onClick={()=>toggleStatus()} className={`text-sm px-3 py-2 font-bold ${isOnGoing ? ' bg-[#E0ABCB] rounded-3xl' : 'text-gray-600'}`}>On-Going</p>
              <p onClick={()=>toggleStatus()} className={`text-sm px-3 py-2 font-bold ${!isOnGoing ? ' bg-[#E0ABCB] rounded-3xl' : 'text-gray-600'}`}>Completed</p>
            </div>
            <button onClick={() => router.push(`/createproposals?id=${proposalCount+1}`)} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[120px] flex justify-center hover:font-bold'> Create +</button>
          </div>
        </div>
       
        <div className='ml-[200px]'>
        <p className='px-4 py-2 bg-black text-white w-[100px] rounded-3xl cursor-pointer mb-5'>Deposite</p>
          <p className=' text-md font-semibold text-gray-500'>Number of Proposals: {proposalCount}</p>
        </div>
        <div className='flex flex-col items-center space-y-5 mx-[200px] my-[50px]'>
    
        {proposals.map((event:any) => {
  const eventTime = new Date(event.date);
  const isCompleted = currentDate > eventTime;
  
  if (!isOnGoing && isCompleted) {
    return (
      <div key={event.pid}>
        <Accepted time={event.date} name={event.name} description={event.description} />
      </div>
    );
  } else if (isOnGoing) {
    return (
      <div key={event.pid}>
        <Proposalsample time={event.date} name={event.name} description={event.description} pid={event.pid} />
      </div>
    );
  } else {
    return null;
  }
})}
        </div>
    </div>
  )
}

export default Proposals
