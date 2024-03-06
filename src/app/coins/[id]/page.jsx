"use client"
import About from '@/app/components/About';
import ChartSection from '@/app/components/ChartSection'
import Navbar from '@/app/components/Navbar'
import PerformanceSection from '@/app/components/PerformanceSection'
import SentimentSection from '@/app/components/SentimentSection';
import TeamSection from '@/app/components/TeamSection';
import TokenomicsSection from '@/app/components/TokenomicsSection';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { FiArrowRight } from "react-icons/fi";
import TrendingCoinSection from '@/app/components/TrendingCoinSection';
import TrendingCarousel from '@/app/components/TrendingCarousel';

function Page() {

  const [data, setData] = useState({})
  const [trendCoin, setTrendCoin] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response1 = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true")
        const response2 = await axios.get("https://api.coingecko.com/api/v3/search/trending")
        setData(response1.data.bitcoin)
        setTrendCoin((response2.data.coins).slice(0,6))
        console.log((response2.data.coins).slice(0,6))
      } catch (error) {
        console.log(error)
      }
    }
      getData()
  },[])



  return (
    <div className='flex flex-wrap items-start justify-between desktop:justify-center gap-0 text-[1rem] text-[#0B1426] mb-[2rem]'>

        <Navbar />

        <div className='w-[100%] tablet:w-[70%] desktop:w-[881px] flex flex-col items-center justify-center gap-[0.5rem] text-[1rem] text-[#0B1426] overflow-hidden'>

            <ChartSection data={data} />

            <div className='w-[100%] px-[1rem] overflow-hidden'>
            <div className="w-[100%] overflow-auto flex gap-[1rem] text-[1rem] font-medium carousel">
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#overview">Overview</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#fundamentals">Fundamentals</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#newsinsight">NewsInsights</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#sentiments">Sentiments</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#team">Team</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#technicals">Technicals</a>
                <a className='px-[1rem] border-b-4 active:border-[#0052FE] focus:border-[#0052FE] hover:border-[#0052FE]' href="#tokenomics">Tokenomics</a>
            </div>
            </div>

            

            <PerformanceSection />

            <SentimentSection />

            <About />

            <TokenomicsSection />

            <TeamSection />

        </div>
        
        <div className='w-[100%] tablet:w-[30%] desktop:w-[427px] tablet:mt-[6.8rem] flex flex-col gap-[1rem] p-[1rem] tablet:p-[0px] tablet:pb-[1rem] tablet:pr-[1rem] '>

              <div className='w-[100%] bg-[#0052FE] rounded-[16px] flex flex-col gap-[0.5rem] p-[0.75rem] pt-[3rem] justify-center items-center'> 
                  <Image src={'/Frame.png'} alt='img' width={150} height={150} /> 
                  <h1 className='text-[22px] text-white font-semibold text-center'>Get Started with KoinX for FREE</h1>
                  <p className='text-[14px] text-white text-center'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
                  
                  <div className='rounded-[8px] px-[0.75rem] py-[0.25rem] bg-white flex gap-[0.5rem] font-semibold text-[14px] items-center mb-[1rem]'>
                      <a href="">Check now </a>
                      <FiArrowRight />
                  </div>

              </div>

              <TrendingCoinSection data={trendCoin} />


        </div>

        <div className='hidden tablet:flex flex-col items-start justify-stat w-[100%] gap-[1.5rem] p-[2rem] tablet:p-[4rem] bg-white '>

          <TrendingCarousel data={trendCoin} title={"You May Also Like"} />

          <TrendingCarousel data={trendCoin} title={"Trending Coins"} />

        </div>

    </div>
  )
}

export default Page