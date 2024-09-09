import React from 'react'
import { Link } from 'react-router-dom' 

export default function CallToAction() {
    return (
        <div className=' w-[90%] md:w-[50%] m-auto  bg-blue-500 rounded-md  text-white -translate-y-[160px] flex items-center justify-center flex-col py-10 px-5 text-center'>
            <h1 className='text-2xl md:text-3xl leading-[3rem] my-3'>ফ্রি ট্রায়াল শুরু করুন, আজই!</h1>
            <p className=' text-[16px] md:text-[18px]'>কোডিং ছাড়াই পেয়ে যান ল্যান্ডিং পেজ জেনারেটরের সব সুবিধা। আপনার ব্যবসার বৃদ্ধি এখন আপনার হাতে।</p>

            <Link to="/auth" className=' text-[15px] md:text-[18px] my-5 font-semibold border rounded-md py-5 px-4'>আপনার পেজ তৈরি করুন</Link>

        </div>
    )
}
