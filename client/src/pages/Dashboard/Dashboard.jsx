import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import images from '../../constans/Constans';
import DashboardLayout from './DashboardLayout';
import Loader from '../../PageComponents/Loader';
import { formContext } from '../../ContextApi/ContextApi';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const { getUser, userInfo } = useContext(formContext)
  const { user, page, orders } = userInfo
  const { username } = useParams()

  useEffect(() => {

    setIsLoading(true)
    const getData = async () => {
      try {
        await getUser()
      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    getData()

  }, []);

  if (isLoading) {
    return <Loader />
  }
 

  return (
    <DashboardLayout>

      {/* profile start */}
      <div className=' mb-10'>
        <div className='w-full h-[350px]'>
          <img src={images.coverPhoto} className='w-full h-full' alt="landing page abr" />
          <div className=' -translate-y-56 text-center'>
            <h1 className='h1'>Your Profile</h1>
            <p>Increase Your Sell</p>
          </div>
          <div className=' -translate-y-[150px] w-[150px] m-auto '>
            <img src={images.profilePhoto} className='w-full h-[150px] rounded-full border-2 border-orange-500' alt="" />
          </div>
        </div>

        <div className='w-full h-[100px] bg-gray-100' />

        <div className=' my-5 flex flex-col gap-3'>
          <h2 className='text-2xl'>Name - {user.name}</h2>
          <p>Email - {user.email}</p>
          <p>Business Name - {user.username}</p>
        </div>

        <div className=' my-4 flex items-center justify-between flex-wrap'>
          <Link to={`/dashboard/${username}/page-manage`} className=' inline-block text-lg md:w-[48%] py-7 px-5 rounded-md bg-[#FF8B36] text-center'>
            <p> Total Pages</p>
            <p>{page && page.length}</p>
          </Link>
          <Link to={`/dashboard/${username}/orders`} className=' inline-block text-lg md:w-[48%] py-7 px-5 rounded-md bg-[#f57d27] text-center'>
            <p> Total Orders</p>
            <p>{orders && orders.length}</p>
          </Link>
        </div>
      </div>
      {/* profile end */}

    </DashboardLayout>
  );
}


