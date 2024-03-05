import React from 'react'
import Image from 'next/image';
import Before from '../asset/before.png';
import Bitcoin from '../asset/Bitcoin.png';
import TradingViewWidget from '@/app/components/TradingViewWidget';
import { TiArrowSortedUp } from "react-icons/ti";

function ChartSection() {
  return (
    <>
        <main className='flex flex-col items-start justify-stat w-[100%] p-[1rem] gap-[1.5rem]'>

                <div className='flex flex-col items-start justify-start gap-[1rem]'> {/* header title */}

                <div className='flex gap-[0.5rem] items-center justify-start text-[14px]'>
                    <h3 className='text-[#3E5765]'>Cryptocurrencies</h3>
                    <div>
                        <Image src={Before} alt="before" width={10} height={10} />
                    </div>
                    <h3>
                        Bitcoin
                    </h3>
                </div>

                <div className='flex gap-[1.5rem] items-center justify-center '>

                    <div className='flex items-center justify-center gap-[0.5rem] font-semibold'>
                    <div>
                        <Image src={Bitcoin} alt="before" width={32} height={10} />
                    </div>
                    <h3 className='text-[#0B1426] text-[21px] '>Bitcoin</h3>
                    <span className='text-[#5D667B] text-[14px]'>BTC</span>
                    </div>


                    <span className='px-[0.5rem] py-[0.25rem] bg-[#808A9D] rounded-[4px] text-white text-[1rem]'>Rank #1</span>
                </div>

                </div>

                <div className='w-[100%] p-[1.5rem] bg-white border-[2px] border-[#DEE1E6] flex flex-col justify-center items-start gap-[0.5rem] rounded-[0.5rem]'> {/* chart div */}

                <div className=' w-[100%] flex gap-[1rem] items-start justify-start flex-wrap'>

                <div>
                    <h1 className='font-semibold text-[28px] leading-tight'>$16,953.04</h1>
                    <h3 className='text-[16px] font-medium'>₹ 13,42,343</h3>
                </div>

                <div className='flex items-center justify-center gap-[0.5rem]'>

                    <div className='px-[0.5rem] py-[0.25rem] bg-[#EBF9F4] rounded-[4px] text-[#14B079] text-[1rem] flex items-center justify-center flex-wrap gap-[0.5rem]'> {/* inc percent div */}

                        <div className='text-[1.5rem]'>
                            <TiArrowSortedUp />
                        </div>

                        <h3>2.15%</h3>

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