import React from 'react'
import Home from './Components/Home'
import PolicePage from './Components/PolicePage'
import { HashRouter, Route, Routes } from 'react-router-dom'
import AmbulancePage from './Components/AmbulancePage'
import FireFightersPage from './Components/FireFightersPage'
import RelativePage from './Components/RelativePage'
import Contacts from './Components/Contacts'
import TipsPage from './Components/TipsPage'

const App = () => {
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/src/Components/Contacts.jsx' element={<Contacts />} />
      <Route path='/src/Components/TipsPage.jsx' element={<TipsPage />} />
      <Route path='/src/Components/PolicePage.jsx' element={<PolicePage />} />
      <Route path='/src/Components/AmbulancePage.jsx' element={<AmbulancePage />} />
      <Route path='/src/Components/FireFightersPage.jsx' element={<FireFightersPage />} />
      <Route path='/src/Components/RelativePage.jsx' element={<RelativePage />} />
    </Routes>
      
    </HashRouter>
  );
}

export default App
