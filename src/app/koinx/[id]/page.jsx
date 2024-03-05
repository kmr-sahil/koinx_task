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

function Page() {

  return (
    <div className='flex flex-wrap items-start justify-between desktop:justify-center gap-0 text-[1rem] text-[#0B1426] mb-[2rem]'>

        <Navbar />

        <div className='w-[100%] tablet:w-[70%] desktop:w-[881px] flex flex-col items-center justify-center gap-[1rem] text-[1rem] text-[#0B1426]'>

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

            <About />

            <TokenomicsSection />

            <TeamSection />

        </div>
        
        <div className='w-[100%] tablet:w-[30%] desktop:w-[427px] h-[20rem] bg-[#0052FE] rounded-[8px] mt-[6.75rem] p-[1rem]'>
              <div className='w-[100%] h-[10rem] bg-green-400'> </div>
        </div>



    </div>
  )
}

export default Page