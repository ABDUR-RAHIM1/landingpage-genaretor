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

            <div className=' w-[95%] md:w-[85%] my-10 m-auto'>
                <img src={image || images.pd1} className='w-full h-[700px] rounded-md' alt="" />
            </div>

            <div style={{ background: styles.background, color: styles.primaryTextColor }} className=' w-full px-5 md:px-10 py-16 my-10 bg-opacity-30 '>
                {
                    quote && quote.map((q, i) => (
                        <div key={i} className=' my-3  text-center'>
                            <h4 style={{ color: styles.primaryTextColor }} className='text-xl'>{q.quote} <br />
                                <span className=' ml-5 text-[11px] font-bold border-b border-dotted ' style={{ color: styles.primaryTextColor }}>
                                    {`(${q.author})`}
                                </span>
                            </h4>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

