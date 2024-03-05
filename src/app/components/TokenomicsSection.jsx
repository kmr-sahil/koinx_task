import React from 'react'

function TokenomicsSection() {
  return (
    <div className='flex flex-col items-start justify-stat w-[100%] p-[1rem] gap-[1.5rem]'>

    <div className='w-[100%] p-[0.75rem] bg-white border-[2px] border-[#DEE1E6] flex flex-col justify-center items-start gap-[1rem] rounded-[0.5rem]'>

         <h1 className='text-[24px] font-semibold'>Tokenomics</h1>

         <h2 className='text-[20px] font-semibold'>Initial Distribution</h2>

         <div className='flex gap-[0.5rem] justify-start items-center'>

           <div className='w-[80px] h-[80px] sm:w-[180px] sm:h-[180px] rounded-full border-[1.5rem] sm:border-[2rem]  border-[#0082FF] border-t-[#FAA002] -rotate-45'></div>

           <div className='flex flex-col justify-start items-start gap-[0.5rem]'>

               <div className='flex gap-[0.2rem] items-center justify-center'>
                 <div className='w-[12px] h-[12px] rounded-full bg-[#0082FF]'></div>
                 <p className='text-[16px]'>Crowdsale investors: 80%</p>
               </div>

               <div className='flex gap-[0.2rem] items-center justify-center'>
                 <div className='w-[12px] h-[12px] rounded-full bg-[#FAA002]'></div>
                 <p className='text-[16px]'>Foundation: 20%</p>
               </div>

           </div>

         </div>

         <p>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>

     </div>

 </div>
  )
}

export default TokenomicsSection