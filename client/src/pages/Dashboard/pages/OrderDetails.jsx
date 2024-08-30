import React from 'react'
import DashboardLayout from '../DashboardLayout'
import { useLocation } from 'react-router-dom'

export default function OrderDetails() {
    const orderData = useLocation().state;
    
    return (
        <DashboardLayout>
            <div className="container mx-auto p-4">
                <div className='my-10 flex flex-col items-center justify-center'> 

                    <a href={orderData.pageUrl} target='_blank'
                        className='inline-block py-2 px-3 bg-blue-500 text-white rounded-md my-2'>
                        Page Details
                    </a>
                </div>


                <div className=' flex items-start justify-between flex-wrap my-10'>
                    <div className='w-full md:w-[48%]'>
                        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                        <div className="flex flex-col space-y-2">
                            <p>Order ID: {orderData._id}</p>
                            <p>Product Name: {orderData.productName}</p>
                            <p>Quantity: {orderData.quantity}</p>
                            <p>Total Price: {orderData.totalPrice}</p>
                            <p>Message: {orderData.message || "there is no Message"}</p>

                        </div>
                    </div>
                    <div className='w-full md:w-[48%]'>
                        <h2 className="text-2xl font-bold mb-4">Costomer Details</h2>
                        <div className="flex flex-col space-y-2">
                            <p>Name: {orderData.name}</p>
                            <p>Email: {orderData.email}</p>
                            <p>Mobile: {orderData.mobile}</p>
                            <p>Address: {orderData.address}</p>
                            <p>District: {orderData.district}</p>
                            <p>Town: {orderData.city}</p>
                            <p>Zip: {orderData.zip}</p>

                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    )
}
