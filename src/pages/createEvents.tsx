import { db } from '@/config/firebase';
import { useActiveWallet } from '@/hooks/useActiveWallet';
import { useContract } from '@/hooks/useContract';
import { addDoc, collection } from 'firebase/firestore';
import { bn } from 'fuels';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoMdClose } from "react-icons/io";

function Createevent() {
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [selectedCategory,setSelectedCategory] = useState('');
  const [time,setTime] = useState("");
  const [email,setEmail] = useState('');
  const [guestname,setGuestname] = useState('');
  const contract = useContract();
  const { wallet, walletBalance, refreshWalletBalance } = useActiveWallet();

  const route = useRouter()

  const handleBack = () => {
    route.push('/events')
  }
  function convertToTimestamp(normalDateTime:any) {
    // Split the normal date with time string into date and time components
    const [datePart, timePart] = normalDateTime.split(' ');

    // Split the date into day, month, and year
    const [day, month, year] = datePart.split('/');
    console.log(timePart)
    // Split the time into hour, minute, and second
    const [hour, minute, second] = timePart.split(':');

    // Create a new Date object using the parsed values
    const date = `${year}-${month}-${day}T${hour}:${minute}:${second}`;
    console.log(date)

    return date;
}


  const handleEvent = async () => {
    const docRef = await addDoc(collection(db, "Events"), {
      name: name,    
      description: description,
      time:convertToTimestamp(time),
      selectedCategory: selectedCategory,
      email: email,
      guestname:guestname,
    });
    
     if (!contract) {
          return toast.error("Contract not loaded");
        }
    
        if (walletBalance?.eq(0)) {
          return toast.error(
            "Your wallet does not have enough funds. Please click the 'Top-up Wallet' button in the top right corner, or use the local faucet.",
          );
        }
    
        await contract.contract?.functions.create_event(bn(Date.parse(convertToTimestamp(time)))).call();
        const count = await contract.contract?.functions.event_count().get();
        console.log(count,"count")
    
        await refreshWalletBalance?.();
        toast.success("Sucessfully Created the Event")
    route.push('/events')
  }

  return (
    <div className='flex justify-center'>
    <div className='flex flex-col w-[700px] rounded-xl bg-[#DBEFF9] m-[30px]  h-[1150px]'>
      <div onClick={() => handleBack()}>
        <IoMdClose size={25} className='ml-auto m-3 z-20 cursor-pointer'/>
        </div>
        <div className='flex justify-center'>
            <p className='text-[40px]'>Create Event</p>
        </div>
        <div className='p-[20px] px-[30px]'>
            <p className='py-[20px]'>Enter Event Name</p>
            <input value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='Web3 Design Meetup (Chennai)' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[20px]'>Where is the Event held</p>
            <input value={description} onChange={(e)=> setDescription(e.target.value)} type='text' placeholder='Chennai, India' className='rounded-xl w-[600px] p-[7px] mb-[10px]'/>
            <input value={time} onChange={(e)=> setTime(e.target.value)} type='text' placeholder='29 March 2024 03.00PM - 06.00PM' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[20px]'>Description</p>
            <textarea placeholder='A causual event for designers in Web3 to Network, Colloaborate and make Friends in the ecosystem...' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[20px]'>Choose Category</p>
            <div className='grid grid-cols-4 gap-4'>
            <div onChange={()=> setSelectedCategory('LightHouse')} className={`rounded-md bg-white p-[10px] hover:shadow-lg flex flex-col justify-center items-center cursor-pointer ${selectedCategory === "LightHouse" ? 'bg-blue-200' : ''}`}> 
              <p>LightHouse</p>
              <p className='text-gray-500'>Workshop</p>
              </div>
              <div onChange={()=> setSelectedCategory('Harbour')} className='rounded-md bg-white p-[10px] hover:shadow-lg flex flex-col justify-center items-center cursor-pointer'> 
              <p>Harbour</p>
              <p className='text-gray-500'>Hackathon</p>
              </div>
              <div onChange={()=> setSelectedCategory('Port')} className='rounded-md bg-white p-[10px] hover:shadow-lg flex flex-col justify-center items-center cursor-pointer'> 
              <p>Port</p>
              <p className='text-gray-500'>Meetup</p>
              </div>
            </div>
            <p className='py-[20px]'>Email</p>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='kaushik@gmail.com' className='rounded-xl w-[600px] p-[7px]' />
            <p className='py-[20px]'>Guest</p>
            <input value={guestname} onChange={(e)=> setGuestname(e.target.value)} type='text' placeholder='Invite Guest' className='rounded-xl w-[600px] p-[7px]' />
            <div className='flex justify-center my-[30px]'>
              <button onClick={()=> handleEvent()} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[200px] flex justify-center hover:font-medium'>Create Event</button>
            </div>
            <p className='py-[10px]'>About Event</p>
            <p className='text-gray-500'>A Casual event for designers in Web3 to Network, Collaborate and make friends in the ecosystem. Also, Speakers talk about designers for Web3</p>
            <div className='flex justify-center my-[20px]'>
              <button  type='submit' className='bg-white p-[10px] rounded-3xl text-gray-400  w-[200px] flex justify-center hover:font-medium'>Share this Event</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Createevent
