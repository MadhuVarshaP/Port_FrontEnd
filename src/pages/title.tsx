import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useAccount } from '@fuel-wallet/react';

function Title() {
    const route = useRouter();
    const { account } = useAccount();
    const [selectedTitle, setSelectedTitle] = useState('');

    // Step 2: Define a function to handle title selection
    const handleTitleSelection = (title:any) => {
        setSelectedTitle(title);
    };

    useEffect(() => {
        // Step 4: Store the selected title in localStorage whenever it changes
        localStorage.setItem('selectedTitle', selectedTitle);
    }, [selectedTitle]);
  return (
    <div className='flex flex-col justify-center items-center my-[40px]'>
        <p className='text-[50px]'>Choose Your Titles</p>
        <div className='m-[20px] border-solid border-2 border-black rounded-2xl h-[500px] w-[700px] flex flex-col justify-center'>
            <p className='text-[30px] p-[20px]'>Choose Your Destination</p>
            <div className='grid grid-cols-3 gap-4 p-[20px]'>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Chief Mate' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Chief Mate')}> 
              <p>Chief Mate</p>
              <p className='text-gray-500'>Non-Tech Contributor</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Helmsman' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Helmsman')}> 
              <p>Helmsman</p>
              <p className='text-gray-500'>Organize & Manage Tech</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Chief Engineer' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Chief Engineer')}> 
              <p>Chief Engineer</p>
              <p className='text-gray-500'>Tech Contributor</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Engine Cadet' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Engine Cadet')}> 
              <p>Engine Cadet</p>
              <p className='text-gray-500'>Beginners in Tech</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Boat Man' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Boat Man')}> 
              <p>Boat Man</p>
              <p className='text-gray-500'>Organize & Manage Tech</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Port man' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Port man')}> 
              <p>Port man</p>
              <p className='text-gray-500'>Tech Contributor</p>
              </div>
            </div>
            <div className=' flex justify-between m-[30px]'>
            <button onClick={()=> route.push('/ship')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Previous </button>
            <button onClick={()=> route.push('/interest')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Next </button>
            </div>

        </div>
    </div>
  )
}

export default Title;
