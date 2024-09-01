import React from 'react'

export default function Cart(props) {
    const { deliverySystem, deliverySystemText, offerPrice, productName, productType, regularPrice, shippingIn, shippingOut } = props.info;
    const { orderForm, proccesing } = props

    let amountOfQuantity = Number(offerPrice) * Number(orderForm.quantity);


    let totalAmount;
    if (orderForm.district === "dhaka") {
        totalAmount = amountOfQuantity + Number(shippingIn);
    } else {
        totalAmount = amountOfQuantity + Number(shippingOut);
    }


    let shipping;
    if (orderForm.district === "" || orderForm.district === "dhaka") {
        shipping = Number(shippingIn);;
    } else {
        shipping = Number(shippingOut);
    }

    console.log(shippingIn, shippingOut, shipping);

    return (
        <div className=' bg-gray-50  p-3'>
            <h5 className=' text-orange-600 my-5 text-2xl font-medium'>হিসাব</h5>
            <div className=' flex items-center justify-between border-b my-3'>
                <p className=' font-medium'>পরিমাণ</p>
                <p className='text-2xl'>-</p>
                <p className=' font-medium'>উপযুক্ত মূল্য</p>
            </div>
            <div className=' flex items-center justify-between my-6'>
                <p className=' font-medium'> {orderForm.quantity} রেগুলার  মূল্য </p>
                <p className='text-2xl'>-</p>
                <del className=' font-medium text-red-500'> {regularPrice} <span className='text-[14px]'>BDT</span> </del>
            </div>
            <div className=' flex items-center justify-between my-6'>
                <p className=' font-medium'> {orderForm.quantity} {productType}</p>
                <p className='text-2xl'>-</p>
                <p className=' font-medium'> {amountOfQuantity} <span className='text-[14px]'>BDT</span> </p>
            </div>

            <div className=' flex items-center justify-between text-[17px]'>
                <p>ডেলিভারি <small className=' text-[11px]'>{orderForm.district === "" || orderForm.district === "dhaka" ? "(ঢাকার মধ্যে)" : "(ঢাকার বাহিরে )"}</small> </p>
                <p className='text-2xl'>-</p>
                <p>{shipping} <span className='text-[14px]'>BDT</span> </p>
            </div>
            <div className=' flex items-center justify-between my-3'>
                <p>সর্বমোট</p>
                <p className='text-2xl'>-</p>
                <p> {totalAmount} <span className='text-[14px]'>টাকা </span> </p>
            </div>
            <div className=' bg-gray-100 rounded-md py-5 px-2 my-4'>
                <h4 className=' font-bold text-[17px] my-3'>{deliverySystem} ডেলিভারি</h4>
                <p className='py-2 text-[15px] px-3 bg-gray-200 text-red-600'>
                    {
                        deliverySystemText ||
                        "পণ্য হাতে পেয়ে পেমেন্ট করতে পারবেন"
                    }</p>
            </div>
            <button className='  py-3 px-4 text-clip bg-orange-600 text-white my-5 w-full rounded-md font-medium hover:bg-orange-700 duration-200'>
                {proccesing ? "Proccesing . . ." : "অর্ডার করুন "}
            </button>
        </div>
    )
}
