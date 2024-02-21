import React, { useContext } from 'react'
import Layout from '../components/layout/Layout'
import myContext from '../context/myContext'
import HeroSection from '../components/heroSection/HeroSection'
import Filter from '../components/filter/Filter'
import ProductCard from '../components/productCard/ProductCard'
import Track from '../components/track/Track'
import Testimonial from '../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/cartslice'

const Home = () => {
  
  const dispatch = useDispatch()
  const cart = useSelector((store)=>store?.cart)
console.log(cart)
  const addTocartt = () => {
    dispatch(addToCart('shirt'))
  }

  const deletes = () => {
    dispatch(deleteFromCart('shirt'))
  }

  return (
   <Layout>
  
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/>
        <Testimonial/>
   </Layout>
  )
}

export default Home