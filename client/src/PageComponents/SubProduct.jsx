import React, { useState } from 'react'
import Button from './Button';
export default function SubProduct(props) {
    const { image, about } = props.subProductData;

    const [imageIndex, setImgIndex] = useState(0)
    const handleAddPhoto = (index) => {
        setImgIndex(index)
    }
    return (
        <div className=' px-10 my-10'>

            <div className=' w-full md:w-[80%] m-auto'>
                <div className=' my-10  w-full text-center '>
                    {
                        about && about.map((a, i) => (
                            <p key={i}>{a}</p>
                        ))
                    }
                </div>
                <img src={image[imageIndex]} className=' w-full h-[550px] rounded-md ' alt="" />

            </div>
            <div className='w-full overflow-x-scroll my-5 p-10 bg-gray-100 flex items-center justify-center gap-6'>
                {
                    image && image.map((image, i) => (
                        <img onClick={() => handleAddPhoto(i)} key={i} className=' w-[200px] h-[200px] cursor-pointer' src={image} alt={`${image + i}`} />
                    ))
                }
            </div>

            <div className=' text-center my-10'>
                <Button />
            </div>

        </div>
    )
}
