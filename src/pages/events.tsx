import React from 'react'
import Eventcard from '../components/Eventcard'
import { useRouter } from 'next/router';

function Events() {
    let route = useRouter();
  return (
    <div>
      <div className='m-[60px] flex flex-row justify-between'>
          <p className='text-[40px]'>Events</p>
         
          <div className='mx-[150px] my-[8px]'>
            <button onClick={()=> route.push('createEvents')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[120px] flex justify-center hover:font-bold'> Create +</button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
        </div>
    </div>
  )
}

export default Events;
