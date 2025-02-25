import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/layout.component'
import Home from './components/home/home.component'



const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route element={<Layout/>}>

      <Route index element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>


    </Route>
  )
)



function App() {

  return <RouterProvider router={router} />;

}

export default App
