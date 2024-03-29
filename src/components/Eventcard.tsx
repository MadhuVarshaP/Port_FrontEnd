import React from 'react'
import { GoPeople } from "react-icons/go";
import img1 from '../images/img1.png'
import Image from 'next/image';


function Eventcard() {
  return (
    <div className='flex flex-row my-[20px]'>
      <div className='flex flex-col justify-center items-center p-[10px] border border-black rounded-lg bg-[#2DA2B5] w-[90px] text-white'>
        <p>AUG</p>
        <p className='text-[25px] font-medium'>18</p>
      </div>
      <div className='w-[1000px] mx-[20px] flex flex-row border border-black rounded-lg'>
        <Image src={img1} alt='img1' className='' />
        <div className='flex flex-col p-[20px] justify-center'>
            <p className='font-medium text-[22px]'>Web3 Design Meetup (Chennai)</p>
            <p className='text-gray-500'>LThu, 4 Aug, 18:00 - 18:40 GMT+5:30</p>
        </div>
        <div className='flex flex-col items-center justify-center mx-auto '>
            <button type='submit' className='bg-[#E0ABCB] p-[7px] rounded-3xl w-[100px] flex justify-center'> Chennai </button>
            <div className='flex flex-row'>
            <GoPeople size={24}/>
            <p className='px-[10px] font-medium'>128</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Eventcard
