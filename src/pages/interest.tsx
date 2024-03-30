import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useAccount } from '@fuel-wallet/react';

function Interest() {
    const route = useRouter();
    const { account } = useAccount();
    const [selectedInterests, setSelectedInterests] = useState('');

    // Step 2: Define a function to handle interest selection
    const handleInterestSelection = (interest:any) => {
        // Toggle selection
        setSelectedInterests(interest);
    };

    useEffect(() => {
        // Step 4: Store the selected interests in localStorage whenever it changes
        localStorage.setItem('selectedInterests',selectedInterests);
    }, [selectedInterests]);
  return (
    <div className='flex flex-col justify-center items-center my-[40px]'>
        <p className='text-[50px]'>Choose Your Interest</p>
        <div className='m-[20px] border-solid border-2 border-black rounded-2xl h-[500px] w-[700px] flex flex-col justify-center'>
            <p className='text-[30px] p-[20px]'>Select Events you are Participating </p>
            <div className='grid grid-cols-3 gap-4 p-[20px]'>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedInterests === 'LightHouse' ? 'bg-blue-200' : ''}`} onClick={() => handleInterestSelection('LightHouse')}> 
              <p>LightHouse</p>
              <p className='text-gray-500'>Workshop</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedInterests === 'Harbour' ? 'bg-blue-200' : ''}`} onClick={() => handleInterestSelection('Harbour')}> 
              <p>Harbour</p>
              <p className='text-gray-500'>Hackathon</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedInterests === 'Port' ? 'bg-blue-200' : ''}`} onClick={() => handleInterestSelection('Port')}> 
              <p>Port</p>
              <p className='text-gray-500'>Meetup</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedInterests === 'Boat' ? 'bg-blue-200' : ''}`} onClick={() => handleInterestSelection('Boat')}> 
              <p>Boat</p>
              <p className='text-gray-500'>After party</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedInterests === 'Cruse' ? 'bg-blue-200' : ''}`} onClick={() => handleInterestSelection('Cruse')}> 
              <p>Curse</p>
              <p className='text-gray-500'>Side events</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedInterests === 'Water Bike' ? 'bg-blue-200' : ''}`} onClick={() => handleInterestSelection('Water Bike')}> 
              <p>Water Bike</p>
              <p className='text-gray-500'>Hacker House</p>
              </div>
            </div>
            <div className=' flex justify-between m-[30px]'>
            <button onClick={()=> route.push('/title')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Previous </button>
            <button onClick={()=> route.push('/blockchain')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Let's Ship </button>
            </div>

        </div>
    </div>
  )
}

export default Interest;
