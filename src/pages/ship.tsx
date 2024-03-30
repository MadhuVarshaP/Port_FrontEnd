import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAccount } from '@fuel-wallet/react';

function Ship() {
    const route = useRouter();
    const { account } = useAccount();
    const [selectedShip, setSelectedShip] = useState('');

    // Step 2: Define a function to handle ship selection
    const handleShipSelection = (shipName:any) => {
        setSelectedShip(shipName);
    };

    useEffect(() => {
        // Step 4: Store the selected ship in localStorage whenever it changes
        localStorage.setItem('selectedShip', selectedShip);
    }, [selectedShip]);
  return (
    <div className='flex flex-col justify-center items-center my-[40px]'>
        <p className='text-[50px]'>Choose Your Ship</p>
        <div className='m-[20px] border-solid border-2 border-black rounded-2xl h-[500px] w-[700px] flex flex-col justify-center'>
            <p className='text-[30px] p-[20px]'>Choose Which College are you from ?</p>
            <div className='grid grid-cols-3 gap-4 p-[20px]'>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center ${selectedShip === 'IIT' ? 'bg-blue-200' : ''}`} onClick={() => handleShipSelection('IIT')}> 
              <p>IIT</p>
              <p className='text-gray-500'>Mumbai</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center ${selectedShip === 'SRM' ? 'bg-blue-200' : ''}`} onClick={() => handleShipSelection('SRM')}> 
              <p>SRM</p>
              <p className='text-gray-500'>Chennai</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center ${selectedShip === 'Jain' ? 'bg-blue-200' : ''}`} onClick={() => handleShipSelection('Jain')}> 
              <p>Jain</p>
              <p className='text-gray-500'>Bangalore</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center ${selectedShip === 'NIT' ? 'bg-blue-200' : ''}`} onClick={() => handleShipSelection('NIT')}> 
              <p>NIT</p>
              <p className='text-gray-500'>Delhi</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center ${selectedShip === 'IISc' ? 'bg-blue-200' : ''}`} onClick={() => handleShipSelection('IISc')}> 
              <p>IISc</p>
              <p className='text-gray-500'>Bangalore</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center ${selectedShip === '' ? 'bg-blue-200' : ''}`} onClick={() => handleShipSelection('')}> 
              <p>Create New Ship</p>
              <p className='text-gray-500'>Ship Name</p>
              </div>
            </div>
            <div className=' flex justify-between m-[30px]'>
            <button onClick={() => route.push('/fleet')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Previous </button>
            <button onClick={() => route.push('/title')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Next </button>
            </div>
        </div>
    </div>
  )
}

export default Ship
