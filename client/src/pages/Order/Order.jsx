import React, { useEffect, useState } from 'react'
import formFields from '../../Data/FormInputs'
import Cart from './Cart'
import { useContext } from 'react'
import { formContext } from '../../ContextApi/ContextApi'
import Alert from '../../Homecomponents/Alert'
import { useLocation, useParams } from 'react-router-dom'

export default function Order(props) {
    const { username } = useParams()
    const { page, info } = props;
    const { orderForm, setOrderForm, createOrder } = useContext(formContext)
    const [show, setShow] = useState(false)
    const [proccesing, setProcesing] = useState(false)

    let amountOfQuantity = Number(info.offerPrice) * Number(orderForm.quantity);

    let totalAmount = orderForm.district === "dhaka" ? amountOfQuantity + Number(info.shippingIn) : amountOfQuantity + Number(info.shippingOut);

    const pathname = useLocation().pathname;

    useEffect(() => {

        setOrderForm((prev) => ({
            ...prev,
            businessName: username,
            pageUrl: pathname,
            productName: info.productName,
            totalPrice: totalAmount
        }))
    }, [page, info, username, totalAmount])



    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderForm({ ...orderForm, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcesing(true)
        try {
            await createOrder(orderForm)
            setShow(true)
        } catch (error) {
            console.log(error.message)
        } finally {
            setProcesing(false)
        }
    }

    function closeAlert() {
        setShow(false)
    }

    return (
        <div className='py-10  bg-gray-200'>
            <div className='w-full px-5 md:px-20 py-10 mb-5 bg-orange-500 text-white'>
                <h2 className=' text-xl font-medium my-5 text-center'>অর্ডারটি সম্পন্ন করতে নিচের ফর্মটি পুরন
                    করে <span className='font-bold underline'>অর্ডার করুন</span> বাটনে ক্লিক করুন</h2>
            </div>
            <form onSubmit={handleSubmit} className=' orderFormWrapper'>
                <div id='place-order' />
                <div className='orderForm'>


                    {
                        formFields.map(input => (
                            <div key={input.name} className=' w-full my-5'>
                                <label htmlFor={input.name}>{input.label}</label>
                                <input value={orderForm[input.name]} onChange={handleChange} type={input.type} name={input.name} required={input.required} placeholder={input.placeholder} className='input' />
                            </div>
                        ))
                    }

                </div>
                <div className='cartWrapper'>
                    <Cart info={info} orderForm={orderForm} proccesing={proccesing} />
                </div>
                {show && <Alert closeAlert={closeAlert} />}
            </form>
        </div>
    )
}
