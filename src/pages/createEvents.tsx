import { useRouter } from 'next/router';
import React from 'react'
import { IoMdClose } from "react-icons/io";

function Createevent() {

  const route = useRouter()

  const handleBack = () => {
    route.push('/events')
  }

  return (
    <div className='flex justify-center'>
    <div className='flex flex-col w-[700px] rounded-xl bg-[#DBEFF9] m-[30px]  h-[1100px]'>
      <div onClick={() => handleBack()}>
        <IoMdClose size={25} className='ml-auto m-3 z-20 cursor-pointer'/>
        </div>
        <div className='flex justify-center'>
            <p className='text-[40px]'>Create Event</p>
        </div>
        <div className='p-[20px]'>
            <p className='py-[10px]'>Enter Event Name</p>
            <input type='text' placeholder='Web3 Design Meetup (Chennai)' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[10px]'>Where is the Event held</p>
            <input type='text' placeholder='Chennai, India' className='rounded-xl w-[600px] p-[7px] mb-[10px]'/>
            <input type='text' placeholder='29 March 2024 03.00PM - 06.00PM' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[10px]'>Description</p>
            <textarea placeholder='A causual event for designers in Web3 to Network, Colloaborate and make Friends in the ecosystem...' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[10px]'>Choose Category</p>
            <div className='grid grid-cols-4 gap-4'>
            <div className='rounded-md bg-white p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>LightHouse</p>
              <p className='text-gray-500'>Workshop</p>
              </div>
              <div className='rounded-md bg-white p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Harbour</p>
              <p className='text-gray-500'>Hackathon</p>
              </div>
              <div className='rounded-md bg-white p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Port</p>
              <p className='text-gray-500'>Meetup</p>
              </div>
            </div>
            <p className='py-[10px]'>Email</p>
            <input type='email' placeholder='kaushik@gmail.com' className='rounded-xl w-[600px] p-[7px]' />
            <p className='py-[10px]'>Guest</p>
            <input type='text' placeholder='Invite Guest' className='rounded-xl w-[600px] p-[7px]' />
            <div className='flex justify-center my-[20px]'>
              <button type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[200px] flex justify-center hover:font-medium'>Create Event</button>
            </div>
            <p className='py-[10px]'>About Event</p>
            <p className='text-gray-500'>A Casual event for designers in Web3 to Network, Collaborate and make friends in the ecosystem. Also, Speakers talk about designers for Web3</p>
            <div className='flex justify-center my-[20px]'>
              <button type='submit' className='bg-white p-[10px] rounded-3xl text-gray-400  w-[200px] flex justify-center hover:font-medium'>Share this Event</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Createevent
