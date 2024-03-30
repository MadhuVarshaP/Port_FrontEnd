import React, { useEffect, useState } from 'react'
import Eventcard from '../components/Eventcard'
import { useRouter } from 'next/router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useContract } from '@/hooks/useContract';
import Image from 'next/image';
import img from "../images/Group.png"
import img1 from "../images/Group(1).png"
import img2 from "../images/Group(2).png"
import img3 from "../images/Group(3).png"
import { BN } from 'fuels';

function Events() {
    let route = useRouter();
    const [events,setEvents] = useState([])
    const [eventsCount,setEventsCount] = useState<BN | undefined>()
    const contract = useContract();
    const [selectedTitle, setSelectedTitle] = useState('');

    const handleTitleSelection = (title:any) => {
        setSelectedTitle(title);
    };
    const fetchEvents = async () => {
       
      await getDocs(collection(db, "Events"))
          .then((querySnapshot)=>{               
              const newData:any = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setEvents(newData);                
              console.log("events", newData);
          })
     
  }

  const fetchCount = async () => {
    if(contract){
      const { value } = await contract.contract?.functions.event_count().get() ?? {};
      if (value !== undefined) {
        setEventsCount(value?.words[0]);
        console.log(value.words[0])
    } else {
        setEventsCount(undefined); // Or any other default value you prefer
    }
    console.log(value)
    }
  }

  useEffect(()=>{
    fetchEvents();
    fetchCount();
})
  return (
    <div>
      <div className='flex p-[20px] space-x-3 justify-center'>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Chief Mate' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Chief Mate')}> 
              <p>Chief Mate</p>
              <Image src={img} alt="" />
              <p className='text-gray-500'>Non-Tech Contributor</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Helmsman' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Helmsman')}> 
              <p>Helmsman</p>
              <Image src={img1} alt="" />
              <p className='text-gray-500'>Organize & Manage Tech</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Chief Engineer' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Chief Engineer')}> 
              <p>Chief Engineer</p>
              <Image src={img2} alt="" />
              <p className='text-gray-500'>Tech Contributor</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Engine Cadet' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Engine Cadet')}> 
              <p>Engine Cadet</p>
              <Image src={img3} alt="" />
              <p className='text-gray-500'>Beginners in Tech</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Boat Man' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Boat Man')}> 
              <p>Boat Man</p>
              <Image src={img} alt="" />
              <p className='text-gray-500'>Organize & Manage Tech</p>
              </div>
              <div className={`rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center text-center ${selectedTitle === 'Port man' ? 'bg-blue-200' : ''}`} onClick={() => handleTitleSelection('Port man')}> 
              <p>Port man</p>
              <Image src={img1} alt="" />
              <p className='text-gray-500'>Tech Contributor</p>
              </div>
            </div>
      <div className='m-[60px] flex flex-row justify-between'>
      
          <p className='text-[40px] font-bold'>Events</p>
         
          <div className='mx-[150px] my-[8px]'>
            <button onClick={()=> route.push(`createEvents`)} type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[120px] flex justify-center hover:font-bold'> Create +</button>
          </div>
        </div>
        <div>
          <p className='text-md font-semibold text-gray-500'>Number of Events: {eventsCount}</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
        {events.map((event:any,i) => (
                    <Eventcard key={event.id} name={event.name} description={event.description} time={event.time} />
                ))}
        </div>
    </div>
  )
}

export default Events;
