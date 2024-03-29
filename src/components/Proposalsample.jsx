import React from 'react'

function Proposalsample() {
  return (
    <div className='border border-black rounded-xl w-[650px] h-[270px] m-[0px]'>
    <div className='flex flex-row  p-[10px]'>
        <div className='flex flex-col w-full'>
        <p className='text-[18px]'>Proposal no #23</p>
        <p className='pt-[8px] font-semibold text-[22px]'>ShipitDAO</p>
        <p className='text-[18px] text-gray-500'>kx7f....6zi9</p>
        </div>
      <div className='flex w-full p-[30px] justify-end'>
        <p className=''>With in 10hr</p>
      </div>
    </div>
      <div className='py-[30px] border-black border-b px-[10px]'>
        <p>Solidity to Java Translator？ Can We Convert Solidity file to Java file and Which Blockchain in scalable for Metaverse ?</p>
      </div>
      <div className='flex h-[44px]'>
      <div className='bg-[#DBEFF9] flex justify-center items-center hover:bg-[#4DC5D7] w-[50%] cursor-pointer rounded-bl-xl'>
        <p>In Favour</p>
      </div>
      <div className='bg-[#DBEFF9] flex justify-center items-center w-[50%] hover:bg-[#EF8689] cursor-pointer rounded-br-xl'>
        <p>Against</p>
      </div>
      </div>
    </div>
  )
}

export default Proposalsample
