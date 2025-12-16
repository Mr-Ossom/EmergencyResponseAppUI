import React from 'react'
import {PhoneCall} from 'lucide-react'
import TopNav from './NavBar/TopNav'
import {ShieldCheck} from 'lucide-react'
import BottomNav from './NavBar/BottomNav'

const PolicePage = () => {
  return (
    <div>
        <TopNav />
        
      <section className='w-screen flex-1 overflow-y-auto pb-20 h-[200%] flex flex-col justify-center items-center bg-blue-100'>
        
        <button className='items-center mt-10 h-50 w-50 space-y-0.01 flex flex-col border-2 border-red-400 rounded-full p-4 shadow-lg animate-pulse bg-red-600'>
            <PhoneCall size={50} color='white' />
            <h1 className='text-4xl text-amber-100 font-semibold mt-4'>SOS</h1>
            <p className='text-center text-gray-200 mt-2'>Tap to Call Police</p>
        </button>
<h1 className='mt-14 text-2xl pl-8 font-semibold w-full self-start underline'>Safety Tips</h1>

        <div className='w-full flex flex-col justify-center items-center'>
            

            <ul className='px-4 mt-6 space-y-4'>
                {/* Tip 1 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <ShieldCheck color='blue'/>
                        <h1 className='text-xl font-semibold '>Tip 1</h1>
                    </div>

                    <p className=''>Remain calm and speak clearly. Panicking can make it difficult to relay information accurately.</p>
                </div>
                {/* Tip 2 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <ShieldCheck color='blue'/>
                        <h1 className='text-xl font-semibold '>Tip 2</h1>
                    </div>

                    <p className=''>Provide your exact location. Include street names, nearest cross streets, and any landmarks.</p>
                </div>

                {/* Tip 3 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <ShieldCheck color='blue'/>
                        <h1 className='text-xl font-semibold '>Tip 3</h1>
                    </div>

                    <p className=''>Describe the situation accurately and concisely. Focus on facts, not assumptions.</p>
                </div>

                {/* Tip 4 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <ShieldCheck color='blue'/>
                        <h1 className='text-xl font-semibold '>Tip 4</h1>
                    </div>

                    <p className=''>Follow the operator's instructions They are trained to guide you through the emergency.</p>
                </div>

                {/* Tip 5 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <ShieldCheck color='blue'/>
                        <h1 className='text-xl font-semibold 5'>Tip </h1>
                    </div>

                    <p className=''>Do not hang up until the operator tells you to. They may need more information or to dispatch units.</p>
                </div>

                {/* Tip 6 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <ShieldCheck color='blue'/>
                        <h1 className='text-xl font-semibold '>Tip 6</h1>
                    </div>

                    <p className=''>Stay safe and observe from a distance if possible. Do not put yourself in further danger.</p>
                </div>
                
            </ul>
        </div>
      </section>

        <BottomNav />
    </div>
  )
}

export default PolicePage
