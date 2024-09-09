import React from 'react'
import DashboardLayout from '../DashboardLayout'
import images from '../../../constans/Constans'
import FormTitle from '../../../Helpers/FormTitle';
import FormSubTitle from '../../../Helpers/FormSubTitle';

export default function Themes() {
    const { themes } = images;
    console.log(images)
    return (
        <DashboardLayout>
            <FormTitle text={"Themes"} />
            <FormSubTitle text={"Activet Theme Or Costomize"} />
            <div className=' flex items-center justify-between flex-wrap '>
                {
                    themes && themes.map((t, i) => (
                        <div className='w-[31%] h-[450px] my-6 bg-orange-200'>
                            <img key={i} className='w-full h-[90%]' src={t} alt={`Images Of Theme ${i}`} />
                            <div className=' flex items-start justify-between my-3 px-3'>
                                <button className='py-2 px-3 bg-orange-500 text-white'>
                                    Live Preview
                                </button>
                                <button className='py-2 px-3 bg-orange-500 text-white'> Activate</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </DashboardLayout>
    )
}
