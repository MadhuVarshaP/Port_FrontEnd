import React from 'react'
import Proposalsample from '../components/Proposalsample'
import Accepted from '../components/Accepted'
import Rejected from '../components/Rejected'
import { useRouter } from 'next/router'

function Proposals() {
    const router = useRouter()
  return (
    <div>
        <div className='m-[60px] flex flex-row justify-between'>
          <p className='text-[40px]'>Proposals</p>
          <div className='mx-[150px] my-[8px]'>
            <button onClick={() => router.push('/createproposals')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[120px] flex justify-center hover:font-bold'> Create +</button>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-5 mx-[200px] my-[50px]'>
        <Rejected />
        <Accepted />
        <Proposalsample />
        <Rejected />
        <Accepted />
        <Proposalsample />
        </div>
    </div>
  )
}

export default Proposals
