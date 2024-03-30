import React, { useEffect, useState } from 'react'
import profilepic from '../images/profile.jpeg'
import Image from 'next/image';
import { useRouter } from 'next/router';

function Profilepage() {
    const route = useRouter()
    const [fleet, setFleet] = useState('');
    const [ship, setShip] = useState('');
    const [destination, setDestination] = useState('');
    const [events, setEvents] = useState('');
    const [blockchain, setBlockchain] = useState('');
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    useEffect(() => {
        // Fetching data from localStorage
        const storedFleet = localStorage.getItem('selectedFleet') || '';
        const storedShip = localStorage.getItem('selectedShip') || '';
        const storedDestination = localStorage.getItem('selectedTitle') || '';
        const storedEvents = localStorage.getItem('selectedInterests') || '';
        const storedBlockchain = localStorage.getItem('selectedBlockchain') || '';
        const storedName = localStorage.getItem('name') || '';
        const storedEmail = localStorage.getItem('email') || '';

        // Updating state with fetched values
        setFleet(storedFleet);
        setShip(storedShip);
        setDestination(storedDestination);
        setEvents(storedEvents);
        setBlockchain(storedBlockchain);
        setEmail(storedEmail);
        setName(storedName);
    }, []);
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center bg-[#2DA2B5] p-4 rounded-2xl text-white'>
        <Image src={profilepic} alt='profile' className='h-32 w-32 rounded-full border-4 border-black  mx-auto my-4'/>
        <p className='text-[25px]'>{name}</p>
        <p className='text-gray-300 '>{email}</p>
        <div className='flex flex-row justify-center items-center text-center m-[20px]'>
            <div className='flex flex-col justify-center text-sm'>
                <p className='text-[18px] font-medium '>98</p>
                <p>Followers</p>
            </div>
            <div className='flex flex-col justify-center mx-[20px] text-sm'>
                <p className='text-[18px] font-medium'>160</p>
                <p>Following</p>
            </div>
            <div className='flex flex-col justify-center text-sm'>
                <p className='text-[18px] font-medium'>100</p>
                <p>XP</p>
            </div>
        </div>
        <p className='w-[500px] px-[30px] text-sm'>Illustrator passionate about creative works and also UIUX Designer and Photographer. NFT Artist , UIUX Designer and Photographer Illustrator passionate about creative works.</p>
        <button onClick={()=> route.push('changeprofile')} type='submit' className='bg-[#0e2932] my-[15px] h-[40px] rounded-3xl  hover:text-white  w-[160px] flex justify-center items-center'>Change Profile</button>
        <div className='flex flex-col justify-start my-[15px] bg-[#87fbe2] p-5 rounded-3xl text-black'>
            <p><span className='font-bold'>Fleet (City) :</span> {fleet}</p>
                    <p><span className='font-bold '>Ship (College) :</span> {ship}</p>
                    <p><span className='font-bold'>Destination :</span> {destination}</p>
                    <p><span className='font-bold'>Events Participating :</span> {events}</p>
                    <p><span className='font-bold'>Blockchain :</span> {blockchain}</p>
        
        </div>
        <button onClick={()=> console.log('')} type='submit' className='bg-[#2DA2B5] h-[40px] rounded-3xl  hover:text-black font-semibold  w-[160px] flex justify-center items-center'>Change</button>
      </div>
    </div>
  )
}

export default Profilepage;