"use client"
import React from 'react'
import RangeDiv from '@/app/components/RangeDiv'
import TitleValueDiv from '@/app/components/TitleValueDiv'
import SubHeadWithInfo from '@/app/components/SubHeadWithInfo';


function PerformanceSection() {
  return (
    <div className='flex flex-col items-start justify-stat w-[100%] p-[1rem] gap-[1.5rem]'>

                <div className='w-[100%] p-[0.75rem] bg-white border-[2px] border-[#DEE1E6] flex flex-col justify-center items-start gap-[1rem] rounded-[0.5rem]'>

                        <h1 className='text-[24px] font-semibold'>Performance</h1>

                        <RangeDiv aTitle={"Today's Low"} aValue={"46,930.22"} bTitle={"Today's High"} bValue={"49,343.83"} />

                        <RangeDiv aTitle={"52W Low"} aValue={"16,930.22"} bTitle={"52W High"} bValue={"49,743.83"} />

                        <SubHeadWithInfo title={"Fundamental"} />

                        <div className='w-[100%] flex flex-col'>
                        <TitleValueDiv title={"Bitcoin Price"} value={"$16,815.46"} />
                        <TitleValueDiv title={"24h Low / 24h High"} value={"$16,382.07 / $16,874.12"} />
                        <TitleValueDiv title={"7d Low / 7d High"} value={"$16,382.07 / $16,874.12"} />
                        <TitleValueDiv title={"Trading Volume"} value={"$23,249,202,782"} />
                        <TitleValueDiv title={"Market Cap Rank"} value={""} />
                        <TitleValueDiv title={"Market Cap"} value={"$323,507,290,047"} />
                        <TitleValueDiv title={"Market Cap Dominance"} value={"38.343%"} />
                        <TitleValueDiv title={"Volume / Market Cap"} value={"0.0718"} />

                        <div className='flex justify-between items-center w-[100%] py-[0.75rem] border-b-[1px] border-[#DEE2E6]'>
                            <h3 className='text-[#768396] text-[14px] font-medium'>All-Time High</h3>
                            <div className='text-[13px] text-[#111827] font-semibold text-end'>
                                <h1>$69,044.77 <span className='text-[#F7324C]'>-75.6%</span></h1>
                                <span className='text-[12px] font-normal'>Nov 10, 2021 (about 1 year)</span>
                            </div>
                        </div>

                        <div className='flex justify-between items-center w-[100%] py-[0.75rem] border-b-[1px] border-[#DEE2E6]'>
                            <h3 className='text-[#768396] text-[14px] font-medium'>All-Time Low</h3>
                            <div className='text-[13px] text-[#111827] font-semibold text-end'>
                                <h1>$67.81 <span className='text-[#0FBA83]'>24729.1%</span></h1>
                                <span className='text-[12px] font-normal'>Jul 06, 2013 (over 9 years)</span>
                            </div>
                        </div>

                </div>         

                </div>

            </div>
  )
}

export default PerformanceSection