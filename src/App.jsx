import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import Dashboard from './pages/Dashboard'
import NoPage from './pages/NoPage'
import MyState from './context/myState'
import AllProducts from './pages/AllProducts'


function App() {
 
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/allproducts',
      element:<AllProducts/>
    },
    {
      path:'/order',
      element:<Order/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/*',
      element:<NoPage/>
    }
  ])

  return (
    <div><MyState>
    
      <RouterProvider router={appRouter}/>
   
   </MyState></div>
  
  )
}

export default App
