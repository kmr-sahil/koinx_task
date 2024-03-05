"use client"
import ChartSection from '@/app/components/ChartSection'
import Navbar from '@/app/components/Navbar'
import RangeDiv from '@/app/components/RangeDiv'
import TitleValueDiv from '@/app/components/TitleValueDiv'
import React, { useState, useEffect } from 'react'
import { MdInfo } from "react-icons/md";

function Page() {

  return (
    <div className='flex flex-col items-center justify-center gap-[1rem] text-[1rem] text-[#0B1426] mb-[2rem]'>

        <div className='w-[100%] flex flex-col items-center justify-center gap-[1rem] text-[1rem] text-[#0B1426]'>

            <Navbar />

            <ChartSection />

            <div className="w-[100%] overflow-auto flex gap-[1rem] text-[1rem] font-medium ">
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#overview">Overview</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#fundamentals">Fundamentals</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#newsinsight">NewsInsights</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#sentiments">Sentiments</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#team">Team</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#technicals">Technicals</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#tokenomics">Tokenomics</a>
            </div>

            <div className='flex flex-col items-start justify-stat w-[100%] p-[1rem] gap-[1.5rem]'>

                <div className='w-[100%] p-[0.75rem] bg-white border-[2px] border-[#DEE1E6] flex flex-col justify-center items-start gap-[1rem] rounded-[0.5rem]'>

                        <h1 className='text-[24px] font-semibold'>Performance</h1>

                        <RangeDiv aTitle={"Today's Low"} aValue={"46,930.22"} bTitle={"Today's High"} bValue={"49,343.83"} />

                        <RangeDiv aTitle={"52W Low"} aValue={"16,930.22"} bTitle={"52W High"} bValue={"49,743.83"} />

                        <div className='flex gap-[0.5rem] items-center'>
                            <h1 className='text-[#44475B] text-[18px] font-semibold'>Fundamentals</h1>
                            <div className='text-[#ABB9BF] h-[16px] w-[16px]'>   
                                <MdInfo />
                            </div>
                        </div>

                        <TitleValueDiv title={"Bitcoin Price"} value={"$16,815.46"} />
                        <TitleValueDiv title={"24h Low / 24h High"} value={"$16,382.07 / $16,874.12"} />
                        <TitleValueDiv title={"7d Low / 7d High"} value={"$16,382.07 / $16,874.12"} />
                        <TitleValueDiv title={"Trading Volume"} value={"$23,249,202,782"} />
                        <TitleValueDiv title={"Market Cap Rank"} value={""} />

                        

                </div>

            </div>

            

        </div>
        
        



    </div>
  )
}

export default Page