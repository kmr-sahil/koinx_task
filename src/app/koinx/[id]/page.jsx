"use client"
import About from '@/app/components/About';
import ChartSection from '@/app/components/ChartSection'
import Navbar from '@/app/components/Navbar'
import PerformanceSection from '@/app/components/PerformanceSection'
import SentimentSection from '@/app/components/SentimentSection';
import TeamProfileCard from '@/app/components/TeamProfileCard';
import TeamSection from '@/app/components/TeamSection';
import TokenomicsSection from '@/app/components/TokenomicsSection';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Page() {

  const [data, setData] = useState({})

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true")
        setData(response.data.bitcoin)
      } catch (error) {
        console.log(error)
      }
    }
      getData()
  },[])

  return (
    <div className='flex flex-wrap items-start justify-between desktop:justify-center gap-0 text-[1rem] text-[#0B1426] mb-[2rem]'>

        <Navbar />

        <div className='w-[100%] tablet:w-[70%] desktop:w-[881px] flex flex-col items-center justify-center gap-[1rem] text-[1rem] text-[#0B1426]'>

            <ChartSection data={data} />

            <div className="w-[100%] overflow-auto flex gap-[1rem] text-[1rem] font-medium ">
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#overview">Overview</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#fundamentals">Fundamentals</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#newsinsight">NewsInsights</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#sentiments">Sentiments</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#team">Team</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#technicals">Technicals</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#tokenomics">Tokenomics</a>
            </div>

            <PerformanceSection />

            <SentimentSection />

            <About />

            <TokenomicsSection />

            <TeamSection />

        </div>
        
        <div className='w-[100%] tablet:w-[30%] desktop:w-[427px] h-[20rem] bg-[#0052FE] rounded-[8px] mt-[6.8rem] pb-[1rem] pr-[1rem]'>
              <div className='w-[100%] h-[10rem] bg-green-400'> </div>
        </div>



    </div>
  )
}

export default Page