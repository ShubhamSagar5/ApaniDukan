


import React from 'react'
import MyContext from './myContext';

function myState(props) {
    const state = {
        name: "Kamal Nayan",
        class: "9 C"
    }

    const color ="red"
  return (
    <MyContext.Provider value={{state,color}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default myState