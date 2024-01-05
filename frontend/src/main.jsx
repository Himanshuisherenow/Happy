import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements  } from 'react-router-dom'
import Layout from './Layout'
import About from './AboutUs'
import Contact from './ContactUs'
import User from './User'
import Github, { githubInfoLoader } from './Github'

const router1 = createBrowserRouter(
createRoutesFromElements(

  <Route path='/' element={<Layout/>}>
    
    <Route path='' element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
    <Route path='user/:userid' element={<User/>}></Route>

    <Route loader={githubInfoLoader} path='github' element={<Github/>}></Route>
  </Route>

)
 )
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }]
//   }])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   
  <RouterProvider router = {router1}/>

  </React.StrictMode>,
)
