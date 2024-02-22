import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'

import NoPage from './pages/NoPage'
import MyState from './context/myState'
import AllProducts from './pages/AllProducts'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import ProductInfo from './pages/produtInfo/ProductInfo'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import AddProduct from './pages/admin/pages/AddProduct'
import UpdateProduct from './pages/admin/pages/UpdateProduct'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/productinfo/:id',
      element:<ProductInfo/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    {
      path:'/addproduct',
      element:<AddProduct/>
    },
    {
      path:'/updateproduct',
      element:<UpdateProduct/>
    },
    {
      path:'/*',
      element:<NoPage/>
    }
  ])

  return (
    <div><MyState>
    
      <RouterProvider router={appRouter} />
      <ToastContainer/>
   </MyState></div>
  
  )
}

export default App
