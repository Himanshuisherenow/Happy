import React, { useState } from 'react'
import './index.css'

export default function App({}) {

  let [Color,setColor] = useState("Olive")
 
  return (  
  <>
 <div className="w-full h-screen duration-200" style={{backgroundColor : Color}}>
  
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

<div className='flex flex-wrap justify-center gap-3 shodow-lg bg-white px-3 py-2 rounded-3xl'>

  <button onClick={()=>setColor("red")}
   className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
   style={{backgroundColor : 'red'}}
   >Red</button>

  <button onClick={()=>setColor("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor :'green'}}>Green</button>

  <button onClick={()=>setColor("blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : 'blue'}
}>Blue</button>

  <button onClick={()=>setColor("purple")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor :'purple'}}>Purple</button>
  </div>
  </div>
 </div>
  </>
  )
}
