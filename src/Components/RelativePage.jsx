import React from 'react'
import { HeartHandshake } from 'lucide-react';
import TopNav from './NavBar/TopNav';
import BottomNav from './NavBar/BottomNav';
import { ShieldAlert } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Share2 } from 'lucide-react';

const RelativePage = () => {
  return (
    <div>
        <TopNav />

      <section className='w-screen flex-1 overflow-y-auto pb-20 h-[200%] flex flex-col justify-center items-center bg-blue-100'>
        <button className='items-center mt-10 h-60 pt-5 w-60 space-y-0.01 flex flex-col border-none rounded-full p-4 shadow-lg animate-pulse bg-gray-400'>
            <HeartHandshake size={70} color='green' />
            <h1 className='text-3xl text-green-600 font-semibold mt-4'>Call Relatives</h1>
            <p className='text-center text-black mt-2'>Tap to Notify Relatives</p>
        </button>

        <div className='w-full flex flex-col justify-center items-center'>
            <ul className='px-4 mt-6 space-y-4'>
                {/* Tip 1 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <ShieldAlert  size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Stay Calm</h1>
                    </div>

                    <p className='w-full pl-7'>Take a deep breath and stay composed. A clear mind helps you communicate effectively.</p>
                </div>

                {/* Tip 2 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <MessageSquare  size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Provide Clear Details</h1>
                    </div>

                    <p className='w-full pl-7'>Clearly state your emergency, exact location, and any current condition to your contacts.</p>
                </div>

                {/* Tip 3 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <PhoneCall  size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Listen to Instructions</h1>
                    </div>

                    <p className='w-full pl-7'>Follow any guidance or advice given by your emergency contact. They might have a plan.</p>
                </div>

                {/* Tip 4 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <MapPin size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Share Location</h1>
                    </div>

                    <p className='w-full pl-7'>If safe and possible, share your live location with your contacts for quicker assistance.</p>
                </div>

                {/* Tip 5 */}
                <div className='max-w-2xl mt-4 text-lg border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md'>
                    <div className='flex space-x-3'>
                        <Share2 size={35} color='blue' />
                        <h1 className='text-xl font-semibold '>Inform Others</h1>
                    </div>

                    <p className='w-full pl-7'>If appropriate, let other trusted contacts or nearby individuals know about the situation.</p>
                </div>

            </ul>
        </div>
        </section>

        <BottomNav />
    </div>
  );
}

export default RelativePage;
