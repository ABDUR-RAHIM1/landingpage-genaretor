import React from 'react'
import AcordionCard from './AcordionCard'
import Button from './Button'

export default function Acordion(props) {
    const { heading, text, acordions } = props.acordionData;



    return (
        <div className=' px-10 py-10 my-16 bg-gray-100 '>
            <div className='w-full md:w-[60%] m-auto text-center py-6 my-3 text-gray-700 rounded-md'>
                <h1 className='h1 '>{heading}</h1>
                <p>{text}</p>
            </div>

            <div className='acordionWrapper'>
                {
                    acordions && acordions.map((a, i) => (
                        <AcordionCard key={i} data={a} />
                    ))
                }

            </div>

            <div className=' text-center my-5'>
                <Button border="border-yellow-600" />
            </div>

        </div>
    )
}
