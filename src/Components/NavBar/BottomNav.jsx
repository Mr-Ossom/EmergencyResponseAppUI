import React from 'react'
import {House} from 'lucide-react'
import {Users} from 'lucide-react'
import {Lightbulb} from 'lucide-react'
import {CircleUser} from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const BottomNav = () => {
    const navigate = useNavigate();
  return (
    <div>
      <section className='w-screen fixed bottom-0 h-16 py-4 px-4 bg-gray-800 flex justify-around items-center'>
        <button onClick={() => navigate('/')} className='text-white items-center flex flex-col'>
            <House />
            <p>Home</p>
        </button>

        <button onClick={() => navigate('/src/Components/Contacts.jsx')} className='text-white items-center flex flex-col'>
            <Users />
            <p>Contacts</p>
        </button>

        <button onClick={() => navigate('/src/Components/TipsPage.jsx')} className='text-white items-center flex flex-col'>
            <Lightbulb />
            <p>Safety Tips</p>
        </button>

        <button className='text-white items-center flex flex-col'>
            <CircleUser />
            <p>Profile</p>
        </button>

      </section>
    </div>
  )
}

export default BottomNav
