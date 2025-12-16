import React from 'react'
import TopNav from './NavBar/TopNav'
import BottomNav from './NavBar/BottomNav'
import {FireExtinguisher} from 'lucide-react'
import {CircleCheckBig} from 'lucide-react'

const FireFightersPage = () => {
  return (
    <div>
        <TopNav />

      <section className='w-screen flex-1 overflow-y-auto pb-20 h-[200%] flex flex-col justify-center items-center bg-blue-100'>
        <button className='items-center mt-10 h-60 pt-5 w-60 space-y-0.01 flex flex-col border-none rounded-full p-4 shadow-lg animate-pulse bg-orange-600'>
            <FireExtinguisher size={100} color='white' />
            <h1 className='text-xl text-amber-100 font-semibold mt-4'>Call FireFighters</h1>
            <p className='text-center text-gray-200 mt-2'>Tap to Call Fire Fighters</p>
        </button>

        <h1 className='mt-14 text-2xl pl-7 font-semibold w-full self-start'>Safety Tips for Fire Emergencies</h1>

        <div className='w-full flex flex-col justify-center items-center'>
            <ul className='px-4 mt-6 space-y-4'>
                {/* Tip 1 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <CircleCheckBig size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Stay Low and Go</h1>
                    </div>

                    <p className='w-full pl-7'>Crawl low under smoke to find exits. Smoke rises, so the air is clearer closer to the floor.</p>
                </div>

                {/* Tip 2 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <CircleCheckBig size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Feel Doors Before Opening</h1>
                    </div>

                    <p className='w-full pl-7'>Before opening a door, feel it with the back of your hand. If it's hot, do not open it; find another way out.</p>
                </div>

                {/* Tip 3 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <CircleCheckBig size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Have an Escape Plan</h1>
                    </div>

                    <p className='w-full pl-7'>Know at least two ways out every room. Practice your escape plan with family.</p>
                </div>

                {/* Tip 4 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <CircleCheckBig size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Call from a Safe Location</h1>
                    </div>

                    <p className='w-full pl-7'>Once you are safely outside, call emergency services immediately from a mobile phone or neighbor's house.</p>
                </div>

                {/* Tip 5 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <CircleCheckBig size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Never Go Back Inside</h1>
                    </div>

                    <p className='w-full pl-7'>Once you are out, do not re-enter a burning building for any reason.</p>
                </div>
            </ul>
        </div>
        </section>

        <BottomNav />
    </div>
  )
}

export default FireFightersPage
