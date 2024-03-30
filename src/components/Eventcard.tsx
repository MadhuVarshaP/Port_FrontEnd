import React, { useState } from 'react'
import { GoPeople } from "react-icons/go";
import img1 from '../images/img1.png'
import Image from 'next/image';


function Eventcard({name,description,time}:any) {
  const formattedTime = new Date(time).toLocaleString();
  const date = new Date(time);
  const options:any = { month: 'short', day: '2-digit' };
const formattedDate = date.toLocaleDateString('en-US', options);
  
  return (
    <div className='flex flex-row my-[20px]'>
      
      <div className='flex flex-col justify-center items-center p-[10px] border border-black rounded-lg bg-[#2DA2B5] w-[90px] text-white'>
        <p className='text-[25px] text-center'>{formattedDate}</p>
      </div>
      <div className='w-[1000px] mx-[20px] flex flex-row border border-black rounded-lg'>
        <Image src={img1} alt='img1' className='' />
        <div className='flex flex-col p-[20px] justify-center'>
            <p className='font-medium text-[22px]'>{name}</p>
            <p className='text-gray-500'>{formattedTime}</p>
        </div>
        <div className='flex flex-col items-center justify-center mx-auto '>
            <button type='submit' className='bg-[#E0ABCB] mb-2 p-[7px] rounded-3xl flex justify-center'> {description}</button>
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
