import React, { useState } from 'react'
import logo from './../assets//Images/logo.png'
import { auth , provider } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';




import {HiHome,
HiMagnifyingGlass,
HiStar,
HiPlayCircle,
HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';


function Header() {


  const signUserOut = async () => {
      await signOut(auth);
  }

  const [user] = useAuthState(auth);


  const signInWithGoogle = async () => {
 const result = await signInWithPopup(auth, provider)
 console.log(result);
  }

  

    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCHLIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        },
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover cursor-pointer' />
        <div  className='hidden md:flex gap-8'>
        {menu.map((item)=>(
        <HeaderItem name={item.name} Icon={item.icon}/>
  ))}
  </div>
  <div  className='flex md:hidden gap-5'>
        {menu.map((item,index)=>index<3&&(
        <HeaderItem name={''} Icon={item.icon}/>
  ))}
  <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
    <HeaderItem name={''} Icon={HiDotsVertical}/>
  {toggle? <div className='absolute mt-2 bg-[#121212]
    border-[1px] border-gray-700 p-3 px-5 py-4'>
    {menu.map((item,index)=>index>2&&(
        <HeaderItem name={item.name} Icon={item.icon}/>
  ))}
    </div> :null}

  </div>
  </div>
  </div>
  <button onClick={signInWithGoogle} className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 ml-[100px] '> Sign In With Google </button>
  
  <div> 
  <img onClick={signInWithGoogle} className='w-[40px] rounded-full mr-5 ml-10 cursor-pointer' src= {user?.photoURL}/>
    <p> {user?.displayName}</p>
    <button onClick={signUserOut} className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 ml-[20px] my-[2px]'> Log Out </button>
   
  </div>
    
    
    </div>
  )
}

export default Header