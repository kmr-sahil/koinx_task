import React, { useState, useEffect } from 'react';
import { TiArrowSortedUp } from "react-icons/ti";
import Image from 'next/image';

function TrendingCoinSection({ data }) {
    const [greenStates, setGreenStates] = useState([]);

    useEffect(() => {
        const newGreenStates = data.map(item => parseFloat(item?.item?.data?.price_change_percentage_24h?.usd || 0) >= 0);
        setGreenStates(newGreenStates);
    }, [data]);

    return (
        <div className='w-[100%] bg-[#fff] rounded-[8px] flex flex-col gap-[1rem] p-[0.75rem] justify-center items-start'>
            <h1 className='text-[22px] font-semibold'>Trending Coins (24h)</h1>

            {data.map((item, index) => (
                <div className='w-[100%] flex justify-between items-center' key={index}>
                    <div className='flex gap-[0.5rem]'>
                    <img src={item?.item?.large} alt="img" width={24} height={24} />
                        <h2 className='text-[16px]'>{item?.item?.name}</h2>
                    </div>

                    <div className='px-[0.5rem] py-[0.25rem] rounded-[4px] text-[1rem] flex items-center justify-center flex-wrap gap-[0.5rem]'
                        style={{ backgroundColor: `${greenStates[index] ? '#EBF9F4' : ''}`, color: `${greenStates[index] ? '#14B079' : '#F7324C'}` }}>
                        <div className='text-[1.5rem]' style={{ rotate: `${greenStates[index] ? '' : '180deg'}` }}>
                            <TiArrowSortedUp />
                        </div>
                        <h3>{parseFloat(item?.item?.data?.price_change_percentage_24h?.usd || 0).toFixed(1)}%</h3>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default TrendingCoinSection;
