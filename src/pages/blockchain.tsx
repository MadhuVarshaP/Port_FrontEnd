import { useRouter } from 'next/router'
import React from 'react'

function Blockchain() {
    const route = useRouter();
  return (
    <div className='flex flex-col justify-center items-center my-[40px]'>
        <p className='text-[50px]'>Choose Your Blockchain</p>
        <div className='m-[20px] border-solid border-2 border-black rounded-2xl h-[500px] w-[700px] flex flex-col justify-center'>
            <p className='text-[30px] p-[20px]'>Choose Blockchain</p>
            <div className='grid grid-cols-3 gap-4 p-[20px]'>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center'> 
              <p>Ethereum</p>
              
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center'> 
              <p>Solana</p>
             
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center '> 
              <p>Stellar</p>
              
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Tezos</p>
              
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center'> 
              <p>Polygon</p>
              
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Fuel</p>
              
              </div>
            </div>
            <div className=' flex justify-between m-[30px]'>
            <button onClick={()=>route.push('/interest')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Previous </button>

            <button onClick={() => console.log('')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Next </button>
            </div>

        </div>
    </div>
  )
}

export default Blockchain
