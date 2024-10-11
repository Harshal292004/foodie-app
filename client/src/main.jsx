import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './screens/Home'
import Login from './screens/Login'
import SignUp from './screens/SingnUp'
import Welcome from './screens/Welcome'

const router= createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>    
    <Route path='/register' element={<SignUp/>}></Route>
    <Route path='/welcome' element={<Welcome/>}></Route>
    <Route path='/somePath' element={<></>}></Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
