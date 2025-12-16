import React from 'react'
import TopNav from './NavBar/TopNav'
import BottomNav from './NavBar/BottomNav'
import {ShieldAlert} from 'lucide-react'
import {Ambulance} from 'lucide-react'
import {FireExtinguisher} from 'lucide-react'
import {HeartHandshake} from 'lucide-react'
import { useNavigate } from 'react-router-dom'  

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <TopNav />
            <section className='w-screen py-16 px-10 h-[calc(100vh-8rem)] bg-gray-200 space-x-4 justify-center items-center grid grid-cols-2 '>
                <button onClick={() => navigate('/src/Components/PolicePage.jsx')} className='items-center h-40 flex flex-col border-2 border-gray-400 rounded-lg p-4 shadow-md bg-white hover:bg-gray-100'>
                    <ShieldAlert size={70} color='blue ' />
                    <p className='text-2xl text-blue-800 font-semibold'>Police</p>
                </button>

                <button onClick={() => navigate('/src/Components/AmbulancePage.jsx')} className='items-center h-40 flex flex-col border-2 border-gray-400 rounded-lg p-4 shadow-md bg-white hover:bg-gray-100'>
                    <Ambulance size={70} color='red' />
                    <p className='text-2xl text-red-600 font-semibold'>Ambulance</p>
                </button>

                <button onClick={() => navigate('/src/Components/FireFightersPage.jsx')} className='items-center h-40 flex flex-col border-2 border-gray-400 rounded-lg p-4 shadow-md bg-white hover:bg-gray-100'>
                    <FireExtinguisher size={70} color='orange' />
                    <p className='text-2xl text-orange-500 font-semibold'>Fire Fighters</p>
                </button>

                <button onClick={() => navigate('/src/Components/RelativePage.jsx')} className='items-center h-40 flex flex-col border-2 border-gray-400 rounded-lg p-4 shadow-md bg-white hover:bg-gray-100'>
                    <HeartHandshake size={70} color='green' />
                    <p className='text-2xl text-green-800 font-semibold'>Relative</p>
                </button>
            </section>
        <BottomNav />
      
    </div>
  )
}

export default Home
