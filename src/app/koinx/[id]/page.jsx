"use client"
import ChartSection from '@/app/components/ChartSection'
import Navbar from '@/app/components/Navbar'
import PerformanceSection from '@/app/components/PerformanceSection'
import SentimentSection from '@/app/components/SentimentSection';
import Image from 'next/image';


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

            <PerformanceSection />

            <SentimentSection />

            

        </div>
        
        



    </div>
  )
}

export default Page