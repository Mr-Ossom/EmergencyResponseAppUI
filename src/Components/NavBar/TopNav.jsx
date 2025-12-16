import React from 'react'
import {Menu} from 'lucide-react'

const TopNav = () => {
  return (
    <div>
      <section className='w-screen h-17 py-4 px-4 border-b-2 border-gray-200 bg-white flex justify-between items-center shadow-lg'>
        {/* Logo Section */}
        <div className=''>
            <h1 className='text-3xl text-gray-900 font-bold text-center'>MyLogo</h1>
        </div>

        <div className=''>
            <button><Menu color='black' size={38} /></button>
        </div>
      </section>
    </div>
  )
}

export default TopNav
