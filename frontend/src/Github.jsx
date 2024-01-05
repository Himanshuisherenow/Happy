import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

   const data =  useLoaderData()
    // const [data ,setData] = useState([])
    // useEffect(()=>{
    //   fetch('https://api.github.com/users/Himanshuisherenow')
    //   .then((res)=>res.json())
    //   .then(data => { console.log(data) ;
    //     setData(data)})
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers} 
    < img className =" w-72"src={data.avatar_url} alt='GitHub user Image' />
    </div>
  )
}

export default Github


export const githubInfoLoader = async()=>{

    const response = await fetch('https://api.github.com/users/Himanshuisherenow')
   
    const a = response.json()
    return a;
    

}