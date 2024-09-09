import React from 'react'
import HeroVideo from './HeroVideo'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className='relative'>
            <div className=' w-full py-5 px-10 my-0 md:my-10 absolute top-0 left-0 z-50 flex items-center justify-between'>
                <Link to={"/"} className=' text-2xl font-bold text-white'>AR It Solutions</Link>
                <Link to={'/auth'} className='inline-block py-4 px-5 bg-blue-500 rounded-md font-medium text-white'>লগইন করুন </Link>
            </div>
            <HeroVideo />
        </div>
    )
}
