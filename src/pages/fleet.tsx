import React from 'react'
import { useRouter } from 'next/router';

function Fleet() {
    const route = useRouter()
  return (
    <div className='flex flex-col justify-center items-center my-[40px]'>
        <p className='text-[50px]'>Choose Your Fleet</p>
        <div className='m-[20px] border-solid border-2 border-black rounded-2xl h-[500px] w-[700px] flex flex-col justify-center'>
            <p className='text-[30px] p-[20px]'>Choose Which City are you from ?</p>
            <div className='grid grid-cols-3 gap-4 p-[20px]'>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Super Kings</p>
              <p className='text-gray-500'>Chennai</p>
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Royal Red</p>
              <p className='text-gray-500'>Bangalore Fleet</p>
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Indian Knights</p>
              <p className='text-gray-500'>Mumbai Fleet</p>
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Royal Red</p>
              <p className='text-gray-500'>Bangalore Fleet</p>
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Indian Knights</p>
              <p className='text-gray-500'>Mumbai Fleet</p>
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Create New Fleet</p>
              <p className='text-gray-500'>Fleet Name</p>
              </div>
            </div>
            <div className='m-[30px] flex justify-end'>
            <button onClick={() => route.push('ship')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl hover:text-white  w-[120px] flex justify-center'> Next </button>
            </div>
        </div>
    </div>
  )
}

export default Fleet;
