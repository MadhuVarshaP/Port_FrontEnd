import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function Profile() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState("");
  const route = useRouter()

  const handleNext = () => {
    route.push('/fleet')
  }

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('email',email);
}, [name,email]);

  return (
    <div className='flex flex-col justify-center items-center my-[40px]'>
      <p className='text-[50px]'>Create Profile</p>
      <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Handle' className='border rounded-xl px-[15px] my-[30px] py-[8px] w-[400px]'/>
      <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email id' className='border rounded-xl px-[15px] mb-[30px] py-[8px] w-[400px]' />
      <button onClick={() => handleNext()} type='submit' className='bg-[#2DA2B5] p-[10px] w-[400px] rounded-3xl hover:bg-[#49858f] text-white'> Next </button>
    </div>
  )
}

export default Profile
