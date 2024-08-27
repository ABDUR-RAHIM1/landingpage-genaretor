import React, { useContext } from 'react'

import images from "../constans/Constans"

export default function Product(props) {
    const { image, quote } = props.productData;
    const { utils } = props.hero;

    const getStyle = (utils) => {
        return {
            background: `${utils.gradientType}(${utils.gradientRoated}deg, ${utils.primaryBgColor}, ${utils.secondaryBgColor})`,
            primaryTextColor: utils.primaryTextColor,
        };
    };

    const styles = getStyle(utils)

    return (
        <div className=' flex items-center justify-center flex-col my-5'>

            <div className=' w-full md:w-[75%] m-auto'>
                <img src={image || images.pd1} className='w-full h-[500px] rounded-md' alt="" />
            </div>

            <div style={{ background: styles.background, color: styles.primaryTextColor }} className=' w-full px-10 py-16 my-10 bg-opacity-30 '>
                {
                    quote && quote.map((q, i) => (
                        <div key={i} className=' my-3'>
                            <h4 style={{ color: styles.primaryTextColor }} className='text-2xl'>{q.quote}
                                <span className=' ml-5 font-bold ' style={{ color: styles.primaryTextColor }}> -
                                    {`(${ q.author })`}
                                </span>
                            </h4>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

