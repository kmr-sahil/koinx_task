import React from 'react'
import SubHeadWithInfo from '@/app/components/SubHeadWithInfo';
import NewsCard from '@/app/components/NewsCard';
import Estimate from '@/app/components/Estimate';


function SentimentSection() {
  return (
    <div className='flex flex-col items-start justify-stat w-[100%] p-[1rem] gap-[1.5rem]'>

    <div className='w-[100%] p-[0.75rem] bg-white border-[2px] border-[#DEE1E6] flex flex-col justify-center items-start gap-[1rem] rounded-[0.5rem]'>

        <h1 className='text-[24px] font-semibold'>Sentiment</h1>

        <SubHeadWithInfo title={"Key Points"} />

        <div className='w-[100%] overflow-auto flex gap-[1rem]' style={{ overflowX: 'auto' }}>

            <NewsCard icon={'/news.png'} bgColor={'#E8F4FD'} accColor={'#0082FF'} />

            <NewsCard icon={'/grow.png'} bgColor={'#EBF9F4'} accColor={'#0FBA83'} />

            <NewsCard icon={'/news.png'} bgColor={'#E8F4FD'} accColor={'#0082FF'} />

        </div>

        <SubHeadWithInfo title={"Analyst Estimates"} />

        <div className='flex w-[100%] gap-[1rem]'>

            <div className='bg-[#EBF9F4] w-[120px] h-[120px] rounded-full flex items-center justify-center'>
                <h1 className='text-[#0FBA83] font-semibold text-[36px]'>76%</h1>
            </div>

            <div className='flex flex-col items-start justify-evenly flex-grow'>

                <Estimate title={"Buy"} color={'#0FBA83'} perecentValue={76}/>                            
                <Estimate title={"Hold"} color={'#C7C8CE'} perecentValue={8}/>
                <Estimate title={"Sell"} color={'#F7324C'} perecentValue={16}/>

            </div>

            
        </div>

    </div>

</div>
  )
}

export default SentimentSection