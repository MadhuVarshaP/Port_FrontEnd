import { useContract } from '@/hooks/useContract';
import React from 'react'
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

function Accepted({name,description,time,pid}) {
  const contract = useContract();
  const [yesVote,setYesvote] = useState(0);
  const [noVote,setNovote] = useState(0)
  const formattedTime = new Date(time).toLocaleString();
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
    <div className='border border-black rounded-xl w-[650px] h-[246px] my-[0px]'>
    <div className='flex flex-row'>
        <div className='flex flex-col w-full p-[10px]'>
        <p className='text-[18px]'>Proposal no #{pid ? pid : 0}</p>
        <p className='pt-[8px] font-semibold text-[22px]'>{name}</p>
        <p className='text-[18px] text-gray-500'>kx7f....6zi9</p>
        </div>
      <div className='flex w-full p-[30px] justify-end'>
        <p className=''>{formattedTime}</p>
      </div>
    </div>
      <div className='py-[30px] border-black border-b px-[10px]'>
        <p>{description}</p>
      </div>
      <div className='flex justify-around items-center bg-[#4DC5D7] rounded-b-xl '>
      <div className=' w-[100vh] p-[10px]'>
        <p className=''>Proposal is Accepted</p>
      </div>
        <div className='flex flex-row space-x-4 px-[90px]'>
            <FaThumbsUp size={25}/>
            <p>{yesVote}</p>
            <FaThumbsDown size={25}/>
            <p>{noVote}</p>
        </div>
      </div>
    </div>
  )
}

export default Accepted
