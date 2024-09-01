import React from 'react'
import Button from '../../PageComponents/Button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full h-screen  flex items-center justify-center flex-col  px-10 md:px-20 homePage'>
      <h1 className=' text-[1.3rem] md:text-2xl text-white'>
        আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যেতে চান? আমাদের সাথে যোগ দিন এবং আপনার ব্যবসার ডিজিটাল রূপান্তর শুরু করুন। আধুনিক প্রযুক্তি এবং উদ্ভাবনী সমাধানের মাধ্যমে আমরা আপনার ব্যবসাকে আরো উন্নত, দক্ষ এবং প্রতিযোগিতামূলক করে তুলতে সাহায্য করব। আজই আমাদের সাথে যুক্ত হোন এবং ভবিষ্যতের পথে এগিয়ে যান।
      </h1>

      <Link to={"/auth"} className='block button'>
        একাউন্ট তৈরী করুন
      </Link>
      <div className=' text-red-500 my-5'>
        The Page Is Under Proccesing
      </div>
    </div>
  )
}

