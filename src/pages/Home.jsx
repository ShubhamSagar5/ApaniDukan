import React, { useContext } from 'react'
import Layout from '../components/layout/Layout'
import myContext from '../context/myContext'

const Home = () => {
  
  const context = useContext(myContext)
  console.log(context)

  return (
   <Layout>Home
   <div>
    name : {context.state.name}
   </div>
   </Layout>
  )
}

export default Home