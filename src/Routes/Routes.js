import React from 'react';
import { Route, Routes, } from 'react-router-dom';
// import { Standards } from './Components/body/pages/Standards';
import { PageNotFound } from '../Screens/Error404/PageNotFound';
import Homepage from '../Screens/HomePage/Homepage';

import AccGroup from '../Screens/AccountGroup/AccGroup';
import AccountMast from '../Screens/AccountMast/AccountMast';
import ItemMaster from '../Screens/ItemMast/ItemMaster';
import Lab from '../Screens/Lab/Lab';

export const MyRoutes = () => {
  return (
    
    <Routes>
      {/* Render public routes */}
      <Route path='/' element={<Homepage />} />
      <Route path='/accmaster' element={<AccountMast />} />
      <Route path='/acccategory' element={<AccGroup />} />
      <Route path='/itemmaster' element={<ItemMaster />} />

      {/* Render private routes */}

      <Route path='/lab' element={<Lab/>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
export default MyRoutes;