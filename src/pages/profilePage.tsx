import React from 'react'
import profilepic from '../images/profilepic.jpeg'
import Image from 'next/image';
import { useRouter } from 'next/router';

function Profilepage() {
    const route = useRouter()
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <Image src={profilepic} alt='profile' className='h-32 w-32 rounded-full border-4 border-black  mx-auto my-4'/>
        <p className='text-[25px]'>Yoga</p>
        <p className='text-gray-500 '>Beginner</p>
        <div className='flex flex-row justify-center items-center text-center m-[20px]'>
            <div className='flex flex-col justify-center'>
                <p className='text-[25px] font-medium'>98</p>
                <p>Followers</p>
            </div>
            <div className='flex flex-col justify-center mx-[20px]'>
                <p className='text-[25px] font-medium'>160</p>
                <p>Following</p>
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-[25px] font-medium'>100</p>
                <p>XP</p>
            </div>
        </div>
        <p className='w-[600px] px-[30px]'>Illustrator passionate about creative works and also UIUX Designer and Photographer. NFT Artist , UIUX Designer and Photographer Illustrator passionate about creative works.</p>
        <button onClick={()=> route.push('changeprofile')} type='submit' className='bg-[#2DA2B5] my-[15px] h-[40px] rounded-3xl  hover:text-white  w-[160px] flex justify-center items-center'>Change Profile</button>
        <div className='flex flex-col justify-start my-[15px]'>
            <p><span className='text-[22px] font-medium'>Fleet (City) :</span> Indian Knights, Mumbai Fleet</p>
            <p><span className='text-[22px] font-medium'>Ship (College) :</span> IIT, Mumbai</p>
            <p><span className='text-[22px] font-medium'>Destination :</span> Chief Engineer, Tech Contributor</p>
            <p><span className='text-[22px] font-medium'>Events Participating :</span> Harbour, Hackathon</p>
            <p><span className='text-[22px] font-medium'>Blockchain :</span> Polygon</p>
        </div>
        <button onClick={()=> console.log('')} type='submit' className='bg-[#2DA2B5] h-[40px] rounded-3xl  hover:text-white  w-[160px] flex justify-center items-center'>Change</button>
      </div>
    </div>
  )
}

export default Profilepage;