import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} =  useParams()
  return (<>
 <div className='text-4xl text-center bg-slate-500 from-neutral-500' >User :: {userid} </div></>
    
  )
}

export default User