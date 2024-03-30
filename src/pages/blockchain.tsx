import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAccount } from '@fuel-wallet/react';
import firebase from 'firebase/app';
import 'firebase/firestore'; 


// const firebaseConfig = {
//     apiKey: "AIzaSyCDRWT1dAJR2alEkt3d41it98zsGK-WTDU",
//     authDomain: "port-9203f.firebaseapp.com",
//     projectId: "port-9203f",
//     storageBucket: "port-9203f.appspot.com",
//     messagingSenderId: "16799945017",
//     appId: "1:16799945017:web:cbeb99d1e5e50a712f98e8",
//     measurementId: "G-KDVYPRXMLG"
//   };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const db = firebase.firestore(); // Initialize Firestore

function Blockchain() {
    const route = useRouter();
    const { account } = useAccount();
    const [selectedBlockchain, setSelectedBlockchain] = useState('');
    useEffect(() => {
        localStorage.setItem('selectedBlockchain', selectedBlockchain);
    }, [selectedBlockchain]);

    const handleNextButtonClick = async () => {
        route.push('/profilePage')
        // try {
        //     // Store data in Firestore
        //     await db.collection('blockchainChoices').add({
        //         blockchain: selectedBlockchain,
        //         account: account,
        //         timestamp: firebase.firestore.FieldValue.serverTimestamp()
        //     });

        //     // Navigate to the next page
        //     route.push('/interest');
        // } catch (error) {
        //     console.error('Error while storing data in Firestore:', error);
        // }
    };

    return (
        <div className='flex flex-col justify-center items-center my-[40px]'>
            <p className='text-[50px]'>Choose Your Blockchain</p>
            <div className='m-[20px] border-solid border-2 border-black rounded-2xl h-[500px] w-[700px] flex flex-col justify-center'>
                <p className='text-[30px] p-[20px]'>Choose Blockchain</p>
                <div className='grid grid-cols-3 gap-4 p-[20px]'>
                    <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedBlockchain === 'Ethereum' ? 'bg-blue-200' : ''}`} onClick={() => setSelectedBlockchain('Ethereum')}> 
                        <p onClick={() => setSelectedBlockchain('Ethereum')}>Ethereum</p>
                    </div>
                    <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedBlockchain === 'Solana' ? 'bg-blue-200' : ''}`} onClick={() => setSelectedBlockchain('Solana')}> 
                        <p onClick={() => setSelectedBlockchain('Solana')}>Solana</p>
                    </div>
                    <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedBlockchain === 'Stellar' ? 'bg-blue-200' : ''}`} onClick={() => setSelectedBlockchain('Stellar')}> 
                        <p onClick={() => setSelectedBlockchain('Stellar')}>Stellar</p>
                    </div>
                    <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedBlockchain === 'Tezos' ? 'bg-blue-200' : ''}`} onClick={() => setSelectedBlockchain('Tezos')}> 
                        <p onClick={() => setSelectedBlockchain('Tezos')}>Tezos</p>
                    </div>
                    <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedBlockchain === 'Polygon' ? 'bg-blue-200' : ''}`} onClick={() => setSelectedBlockchain('Polygon')}> 
                        <p onClick={() => setSelectedBlockchain('Polygon')}>Polygon</p>
                    </div>
                    <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedBlockchain === 'Fuel' ? 'bg-blue-200' : ''}`} onClick={() => setSelectedBlockchain('Fuel')}> 
                        <p onClick={() => setSelectedBlockchain('Fuel')}>Fuel</p>
                    </div>
                </div>
                <div className=' flex justify-between m-[30px]'>
                    <button onClick={() => route.push('/interest')} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Previous </button>
                    <button onClick={handleNextButtonClick} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Next </button>
                </div>
            </div>
        </div>
    );
}

export default Blockchain;