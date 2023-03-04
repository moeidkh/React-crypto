import React from 'react';
import { putSignNumber } from '../services/functions';

const Crypto = ({image,title,price,percent,symbol,volume}) => {
    return (
        <div className="grid grid-rows-6 justify-center items-center pr-12 pl-8 w-full h-fit border-b-gray-200 border-b-4
            sm:grid-rows-1 sm:grid-cols-6 sm:h-16 sm:border-none
        ">
            <div className="flex justify-center items-center">
                <img src={image} alt={title} className="w-20 h-20 justify-center items-center
                    sm:w-10 sm:h-10
                " />
            </div>
            <div className="">
                {title}
            </div>
            <div className="uppercase">
                {symbol}
            </div>
            <div>
                ${price}
            </div>
            <div className={parseFloat(percent)> 0 ? "text-green-500" : "text-red-600"}>
                {putSignNumber(parseFloat(percent).toFixed(2))}%
            </div>
            <div>
                ${volume}
            </div>

        </div>
    );
};

export default Crypto;