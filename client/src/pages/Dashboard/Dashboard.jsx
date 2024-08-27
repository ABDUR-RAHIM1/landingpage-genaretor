import React from 'react'
import DashboardLayout from './DashboardLayout'
import { useParams } from 'react-router-dom'

export default function Dashboard() {
  const { username } = useParams()
  return (
    <DashboardLayout>
      main : {username}
      <h1 className='h1'>resouces</h1>
    </DashboardLayout>
  )
}
