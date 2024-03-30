import React, { useEffect, useState } from 'react'
import profilepic from '../images/profilepic.jpeg'
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
    <div>
      <div className='flex flex-col justify-center items-center'>
        <Image src={profilepic} alt='profile' className='h-32 w-32 rounded-full border-4 border-black  mx-auto my-4'/>
        <p className='text-[25px]'>{name}</p>
        <p className='text-gray-500 '>{email}</p>
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
            <p><span className='text-[22px] font-medium'>Fleet (City) :</span> {fleet}</p>
                    <p><span className='text-[22px] font-medium'>Ship (College) :</span> {ship}</p>
                    <p><span className='text-[22px] font-medium'>Destination :</span> {destination}</p>
                    <p><span className='text-[22px] font-medium'>Events Participating :</span> {events}</p>
                    <p><span className='text-[22px] font-medium'>Blockchain :</span> {blockchain}</p>
        
        </div>
        <button onClick={()=> console.log('')} type='submit' className='bg-[#2DA2B5] h-[40px] rounded-3xl  hover:text-white  w-[160px] flex justify-center items-center'>Change</button>
      </div>
    </div>
  )
}

export default Profilepage;