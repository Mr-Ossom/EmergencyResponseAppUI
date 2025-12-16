import React from 'react'
import TopNav from './NavBar/TopNav';
import BottomNav from './NavBar/BottomNav';
import { Ambulance } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { HandHelping } from 'lucide-react';

const AmbulancePage = () => {
  return (
    <div>
        <TopNav />

      <section className='w-screen flex-1 overflow-y-auto pb-20 h-[200%] flex flex-col justify-center items-center bg-blue-100'>
        <button className='items-center mt-10 h-60 pt-5 w-60 space-y-0.01 flex flex-col border-none rounded-full p-4 shadow-lg animate-pulse bg-blue-600'>
            <Ambulance size={70} color='white' />
            <h1 className='text-xl text-amber-100 font-semibold mt-4'>Call Ambulance</h1>
            <p className='text-center text-gray-200 mt-2'>Tap to Call Ambulance</p>
        </button>

        <h1 className='mt-14 text-2xl pl-8 font-semibold w-full self-start'>Safety Tips for Ambulance</h1>

        <div className='w-full flex flex-col justify-center items-center'>
            

            <ul className='px-4 mt-6 space-y-4'>
                {/* Tip 1 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <MapPin size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Provide Clear Location</h1>
                    </div>

                    <p className='w-full pl-7'>Clearly state your exact address or recognizable landmarks for faster response. Stay calm.</p>
                </div>

                {/* Tip 2 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <MessageSquare size={35} color='blue'/>
                        <h1 className='text-xl font-semibold '>Describe the Situation</h1>
                    </div>

                    <p className='w-full pl-7'>Briefly and accurately explain what happened, including symptoms or any injuries. Be precise.</p>
                </div>

                {/* Tip 3 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <PhoneCall size={35} color='blue'/>
                        <h1 className='text-xl font-semibold '>Stay on the Line</h1>
                    </div>

                    <p className='w-full pl-7'>Do not hang up until instructed by the dispatcher; they may provide critical first-aid advice</p>
                </div>

                {/* Tip 4 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <HandHelping size={35} color='blue'/>
                        <h1 className='text-xl font-semibold '>Clear the Area</h1>
                    </div>

                    <p className='w-full pl-7'>If safe, clear path for paramedics and secure any pets or obstacles before their arrival.</p>
                </div>
                
            </ul>
        </div>

      </section>
      <BottomNav />
    </div>
  );
}

export default AmbulancePage
