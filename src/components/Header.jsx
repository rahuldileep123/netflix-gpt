import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Header = () => {
const navigate= useNavigate()
const user= useSelector(store=>store.user)

const handleSignOut=()=>{
  signOut(auth).then(() => {
    // Sign-out successfull 
    navigate('/')
  }).catch((error) => {
    // An error happened.
  });
}

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black flex items-center justify-between'>
        <img className='w-[250px] px-8 py-2' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
     
    {user && <div className='flex mx-10'>
      <img className='w-[60%]' src="https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" alt="" />
      <button onClick={handleSignOut}>sign Out</button> 
      </div> }
      
    </div>
  )
}

export default Header