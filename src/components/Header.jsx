import React, { useEffect } from 'react'
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUser } from '../utils/userSlice';
import { toggleGptView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { setPrefferedLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch=useDispatch()
const navigate= useNavigate()
const user= useSelector(store=>store.user)
const showGpt = useSelector(store=>store.gpt.showGptSearch)

const handleSignOut=()=>{
  signOut(auth).then(() => {
    // Sign-out successfull 
    
  }).catch((error) => {
    // An error happened.
  });
}

const handleGptSearch=()=>{
  dispatch(toggleGptView())
}

const handleLanguage=(lang)=>{
    dispatch(setPrefferedLanguage(lang))
}

useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      // console.log(user);
      // console.log(uid,email,displayName);
      dispatch(setUser({uid:uid,email:email,displayName:displayName}))
      navigate("/Browse")
    } else {
      // User is signed out
      dispatch(removeUser())
      navigate("/")
    }
  });

  return ()=> unsubscribe()
},[])
  return (
    <div className='absolute z-10 w-full bg-gradient-to-b from-black flex flex-col md:flex-row items-center justify-between p-3'>
        <img className='w-[150px] px-8 py-2' src="https://wallpapers.com/images/featured/netflix-logo-png-fqwt81hprrz7xsfg.jpg" alt="logo" />

       
     
    {user && 
    <div className='w-full md:w-1/6 flex md:mx-10 justify-between items-center '>
   { showGpt &&  <select onChange={(e)=>handleLanguage(e.target.value)} className='p-2 bg-gray-900 text-white ' name="" id="">
        {SUPPORTED_LANGUAGES.map(lang=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</ option>))}
      </select>}
      <button onClick={handleGptSearch} className='px-4 py-2 mx-3 bg-red-800 rounded text-white'>{showGpt? "Home":"GPT search"}</button>
      <img className='w-[40px] hidden md:block' src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg" alt="" />
      <button className='text-white font-bold' onClick={handleSignOut}>(Sign Out)</button> 
      </div> }
      
    </div>
  )
}

export default Header