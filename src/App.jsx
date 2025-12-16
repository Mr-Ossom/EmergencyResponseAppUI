import React from 'react'
import Home from './Components/Home'
import PolicePage from './Components/PolicePage'
import { HashRouter, Route, Routes } from 'react-router-dom'
import AmbulancePage from './Components/AmbulancePage'
import FireFightersPage from './Components/FireFightersPage'
import RelativePage from './Components/RelativePage'
import Contacts from './Components/Contacts'
import TipsPage from './Components/TipsPage'
import ProfilePage from './Components/ProfilePage'

const App = () => {
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/tips' element={<TipsPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/police' element={<PolicePage />} />
      <Route path='/ambulance' element={<AmbulancePage />} />
      <Route path='/firefighters' element={<FireFightersPage />} />
      <Route path='/relative' element={<RelativePage />} />
    </Routes>
      
    </HashRouter>
  );
}

export default App
