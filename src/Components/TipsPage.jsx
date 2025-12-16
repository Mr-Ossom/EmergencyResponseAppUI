import React from 'react'
import BottomNav from './NavBar/BottomNav'
import {Heart} from 'lucide-react'
import {MapPin} from 'lucide-react'
import {Phone} from 'lucide-react'
import {MessageSquare} from 'lucide-react'
import {ClipboardCheck} from 'lucide-react'
import {ShieldAlert} from 'lucide-react'
import {Hand} from 'lucide-react'
import {ListEnd} from 'lucide-react'
import {Droplet} from 'lucide-react'
import {Clock4} from 'lucide-react'
import {Mic} from 'lucide-react'
import TopNav from './NavBar/TopNav'

const TipsPage = () => {
  return (
    <div>
      <TopNav />
      <section className='w-screen h-[200%] pt-6 px-4 pb-20 flex justify-center grid grid-cols-2 items-stretch gap-3 space-x-4 items-center bg-white'>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-blue-400 '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <Heart size={35} color='blue' />
          </div>

            <p className='px-2 mt-4'>
                Stay calm and provide clear information to responders.
            </p>

        </div>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-gray-200 '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <MapPin size={35} color='#504f4e' />
          </div>

            <p className='px-2 mt-4'>
                Know exact location before calling for help.
            </p>

        </div>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-red-300 '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <Phone size={35} color='red' />
          </div>

            <p className='px-2 mt-4'>
                Call emergency services immediately in critical situations.
            </p>

        </div>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-[#a880d1] '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <MessageSquare size={35} color='#a880d1' />
          </div>

            <p className='px-2 mt-4'>
                If unable to speak, text emergency services if available.
            </p>

        </div>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-[#80d1bd] '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <ClipboardCheck color="#80d1bd" size={35} />
          </div>

            <p className='px-2 mt-4'>
                Follow all instructions given by emergency responders.
            </p>

        </div>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-[#f2ab69] '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <ShieldAlert color="#f2ab69" size={35} />
          </div>

            <p className='px-2 mt-4'>
                Do not hang up until you are told to do so by operator.
            </p>

        </div>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-[#249c02] '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <Hand color="#249c02" size={35} />
          </div>

            <p className='px-2 mt-4'>
                Secure the area if safe to do so; keep others away from danger.
            </p>

        </div>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-[#3af2ef] '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <ListEnd color="#3af2ef" size={35} />
          </div>

            <p className='px-2 mt-4'>
                Administer basic first aid only if you are trained to do so.
            </p>

        </div>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-[#f41010] '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <Droplet color="#f41010" size={35} />
          </div>

            <p className='px-2 mt-4'>
                Do not move an injured person unless absolutely necessary.
            </p>

        </div>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-gray-200 '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <Clock4 color="#1f1e1e" size={35} />
          </div>

            <p className='px-2 mt-4'>
                Be patient; help is on the way as quickly as possible.
            </p>

        </div>

        <div className='max-w-xl h-full py-5 bg-white rounded-lg shadow-md border-2 border-[#1f1e1e] '>
          <div className='w-15 h-15 place-self-center flex items-center justify-center rounded-full bg-gray-200'>
            <Mic color="#1f1e1e" size={35} />
          </div>

            <p className='px-2 mt-4'>
                Speak clearly and loudly so you can be understood.
            </p>

        </div>
      </section>

      <BottomNav />
    </div>
  )
}

export default TipsPage
