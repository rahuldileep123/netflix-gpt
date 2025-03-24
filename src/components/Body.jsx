import React from 'react'
import Header from './Header'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login'

const Body = () => {

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

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body