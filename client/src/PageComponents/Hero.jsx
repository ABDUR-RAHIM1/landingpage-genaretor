import React from 'react'

import images from '../constans/Constans'
import Button from './Button'

export default function Hero(props) {

    const { logo, headline, utils } = props.heroData;

    const getStyle = (utils) => {
        return {
            background: `${utils.gradientType}(${utils.gradientRoated}deg, ${utils.primaryBgColor}, ${utils.secondaryBgColor})`,
            primaryTextColor: utils.primaryTextColor,
        };
    };

    const styles = getStyle(utils)

    return (
        <div className='heroMain'>
            <div style={{ background: styles.background, color: styles.primaryTextColor }} className={` w-full h-full  px-5 md:px-10  flex items-center justify-center flex-col rounded-none md:rounded-b-[170px] md:rounded-br-[170px]`}>
                <div>
                    <img src={logo || images.pd1} className='w-[150px] h-[150px] rounded-full my-3' alt={"landing page"} />
                </div>
                <div className='w-full md:w-[75%]  text-center '>
                    <h1 className=' text-2xl md:text-3xl font-medium my-4 leading-[2rem] md:leading-[3rem]'>{headline.main}</h1>
                    <p className=' text-[16px] md:text-[19px]'>{headline.sub}</p>

                </div>
                <div>
                    <Button border={"border-blue-800"} />
                </div>
            </div>
        </div>
    )
}
