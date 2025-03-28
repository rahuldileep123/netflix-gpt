import React, { useEffect } from 'react'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router'
import Login from './Login'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeUser, setUser } from '../utils/userSlice';

const Body = () => {
const dispatch= useDispatch()
const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path:"/Browse",
        element: <Browse />
    }
])

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      console.log(user);
      console.log(uid,email,displayName);
      dispatch(setUser({uid:uid,email:email,displayName:displayName}))
      // navigate("/Browse")
    } else {
      // User is signed out
      dispatch(removeUser())
    }
  });
},[])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body