import React from 'react'
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

function Rejected() {
  return (
    <div className='border border-black rounded-xl w-[650px] h-[270px] '>
    <div className='flex flex-row'>
        <div className='flex flex-col w-full p-[10px]'>
        <p className='text-[18px]'>Proposal no #23</p>
        <p className='pt-[8px] font-semibold text-[22px]'>ShipitDAO</p>
        <p className='text-[18px] text-gray-500'>kx7f....6zi9</p>
        </div>
      <div className='flex w-full p-[30px] justify-end'>
        <p className=''>28 Aug, 2023</p>
      </div>
    </div>
      <div className='py-[30px] border-black border-b px-[10px]'>
        <p>Solidity to Java Translator？ Can We Convert Solidity file to Java file and Which Blockchain in scalable for Metaverse ?</p>
      </div>
      <div className='flex justify-around items-center bg-[#EF8689] rounded-b-xl '>
      <div className=' w-[100vh] p-[10px]'>
        <p className=''>Proposal is Rejected</p>
      </div>
        <div className='flex flex-row space-x-4 px-[90px]'>
            <FaThumbsUp size={25}/>
            <p>20</p>
            <FaThumbsDown size={25}/>
            <p>25</p>
        </div>
      </div>
    </div>
  )
}

export default Rejected
