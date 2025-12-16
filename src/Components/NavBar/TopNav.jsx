import React from 'react'
import {Menu} from 'lucide-react'

const TopNav = () => {
  return (
    <div>
      <section className='w-screen h-17 py-4 px-4 bg-gray-800 flex justify-between items-center shadow-md'>
        {/* Logo Section */}
        <div className=''>
            <h1 className='text-3xl text-white font-bold text-center'>MyLogo</h1>
        </div>

        <div className=''>
            <button><Menu color='white' size={38} /></button>
        </div>
      </section>
    </div>
  )
}

export default TopNav
