import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { formContext } from '../../ContextApi/ContextApi';

export default function DashboardLayout({ children }) {
  const { logout } = useContext(formContext)
  const { username } = useParams()
  const [show, setShow] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const handleShowSidebar = () => {
    setShow(!show)
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };


  }, []);

  useEffect(() => {
    if (width < 768) {
      setShow(false);
    } else {
      setShow(true);
    }

  }, [width])

  const handleLogOut = () => {
    logout()

    setTimeout(() => {
      navigate('/auth')
    }, 1000);
  }
  const sidebarItems = [
    {
      item: "Dashboard",
      path: `/dashboard/${username}`
    },
    {
      item: "Themes",
      path: `/dashboard/${username}/themes`,
    },
    {
      item: "Create Page",
      path: `/dashboard/${username}/create-page`,
    },
    {
      item: "Manage Pages",
      path: `/dashboard/${username}/page-manage`,
    },
    {
      item: "Orders",
      path: `/dashboard/${username}/orders`,
    },
  ]

  return (
    <div className=' w-full flex dashboardLayout'>
      <aside className={` ${show ? "block" : "hidden"} sidebar w-[200px] md:w-[250px] px-5 py-10 h-screen overflow-y-scroll border-r-2`}>

        <div className=' border-b border-gray-600 pb-4 my-10'>
          <h4 className=' text-xl font-medium my-3 flex gap-2 items-center'> <MdDashboard className='text-2xl text-orange-500' />  Dashboard</h4>
          <p className='text-center font-medium'>{username}</p>
        </div>

        <nav className=' nav my-10'>

          {
            sidebarItems.map((s, i) => (
              <Link key={i} to={s.path} className={`linkItem ${location.endsWith(s.path) && "scale-[1.12] bg-gray-400"}`}>
                {s.item}
              </Link>
            ))
          }


          <button onClick={handleLogOut} className='w-full py-4 px-2 text-center bg-red-600 hover:shadow-lg hover:rounded-md duration-200 text-white my-5'>Log out</button>
        </nav>
      </aside>
      <main className=' dashboardMain flex-1 h-screen overflow-y-scroll py-10 px-5'>
        <FaArrowAltCircleRight onClick={handleShowSidebar} className={` ${show ? " rotate-0" : " rotate-180"} duration-300 text-3xl text-orange-500 cursor-pointer fixed top-5 left-5`} />
        {children}
      </main>
    </div>
  )
}
