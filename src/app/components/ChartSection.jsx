import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import TradingViewWidget from '@/app/components/TradingViewWidget';
import { TiArrowSortedUp } from "react-icons/ti";

function ChartSection({data}) {
    
    console.log(data)
    const [green, setGreen] = useState(true);

    useEffect(() => {
        // Update the green state based on the value of usd24hChange
        const usd24hChange = data?.usd_24h_change !== undefined ? parseFloat(data.usd_24h_change).toFixed(2) : '';
        if (usd24hChange < 0) {
            setGreen(false);
        } else {
            setGreen(true);
        }
    }, [data]);

    function addCommasToNumber(number) {
        if (typeof number === 'number') {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return '';
    }

    const formattedUsd = addCommasToNumber(data.usd);
    const formattedInr = addCommasToNumber(data.inr);
    const usd24hChange = data?.usd_24h_change !== undefined ? parseFloat(data.usd_24h_change).toFixed(2) : '';


  return (
    <>
        <main className='container'>

                <div className='flex flex-col items-start justify-start gap-[1rem]'> {/* header title */}

                <div className='flex gap-[0.5rem] items-center justify-start text-[14px]'>
                    <h3 className='text-[#3E5765]'>Cryptocurrencies</h3>
                    <div>
                        <Image src={'/before.png'} alt="before" width={10} height={10} />
                    </div>
                    <h3>
                        Bitcoin
                    </h3>
                </div>

                <div className='flex gap-[1.5rem] items-center justify-center '>

                    <div className='flex items-center justify-center gap-[0.5rem] font-semibold'>
                    <div>
                        <Image src={'/Bitcoin.png'} alt="before" width={32} height={10} />
                    </div>
                    <h3 className='text-[#0B1426] text-[21px] '>Bitcoin</h3>
                    <span className='text-[#5D667B] text-[14px]'>BTC</span>
                    </div>


                    <span className='px-[0.5rem] py-[0.25rem] bg-[#808A9D] rounded-[4px] text-white text-[1rem]'>Rank #1</span>
                </div>

                </div>

                <div className='container-2'> {/* chart div */}

                <div className=' w-[100%] flex gap-[1rem] items-start justify-start flex-wrap'>

                <div>
                    <h1 className='font-semibold text-[28px] leading-tight'>$ {formattedUsd}</h1>
                    <h3 className='text-[16px] font-medium'>₹ {formattedInr}</h3>
                </div>

                <div className='flex items-center justify-center gap-[0.5rem]'>

                    <div className='px-[0.5rem] py-[0.25rem] rounded-[4px] text-[1rem] flex items-center justify-center flex-wrap gap-[0.5rem]'
                        style={{backgroundColor: `${green ? '#EBF9F4' : ''}`, color: `${green ? '#14B079' : '#F7324C'}`}}> {/* inc percent div */}

                        <div className='text-[1.5rem]' style={{rotate: `${green ? '' : '180deg'}`}}>
                            <TiArrowSortedUp />
                        </div>

                        <h3>{usd24hChange}%</h3>

                    </div>

                    <h3 className='text-[14px] text-[#768396]'>(24H)</h3>

                </div>



            </div>

            <hr className='w-[100%] bg-[#DEE1E6] mt-[1rem] mb-[0.5rem]'/>

            <h1 className='text-[14px] font-semibold'>Bitcoin Price Chart (USD)</h1>

            <div className='w-[100%] h-[16rem]'>
                <TradingViewWidget/>
            </div>

            </div>

    </main>
    </>
  )
}

export default ChartSection