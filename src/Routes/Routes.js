import React from 'react'
import {  Routes, Route, } from 'react-router-dom';
// import { Standards } from './Components/body/pages/Standards';
import Homepage from '../Screens/HomePage/Homepage';
import { Profile } from '../Screens/Profile/Profile';
import { Settings } from '../Screens/Profile/Settings';
import { PageNotFound } from '../Screens/Error404/PageNotFound';

import Lab from '../Screens/Lab/Lab';
import { PrivateElement } from './PrivateRoute';

export const MyRoutes = () => {
   return (
    
    <Routes>
      {/* Render public routes */}
      <Route path='/' element={<Homepage />} />

      {/* Render private routes */}

      <Route path='/lab' element={<Lab/>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
export default MyRoutes;