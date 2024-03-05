import React from 'react'
import Image from 'next/image';
import { FiArrowRight } from "react-icons/fi";

function About() {
  return (
    <div className='flex flex-col items-start justify-stat w-[100%] p-[1rem] gap-[1.5rem]'>

    <div className='w-[100%] p-[0.75rem] bg-white border-[2px] border-[#DEE1E6] flex flex-col justify-center items-start gap-[1rem] rounded-[0.5rem]'>

      <h1 className='text-[24px] font-semibold'>About Bitcoin</h1>

      <div className='flex flex-col gap-[0.35rem] items-start w-[100%]'>

          <h2 className='text-[18px] font-semibold'>What is Bitcoin ?</h2>

          <p className='text-[16px]'>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>

          <h2 className='text-[18px] font-semibold'>Lorem ipsum dolor sit amet</h2>

          <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  
              <br></br><br></br>
              Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
              <br></br> <br />
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
      
            <div className='flex gap-[1rem] flex-wrap'>
            <div className='rounded-[8px] p-[0.75rem] w-[100%] sm:w-[388px] flex justify-start gap-[1.5rem] items-center' style={{background: 'linear-gradient(160deg, #79F1A4 0%, #0E5CAD 80%)',}}>
              <div>
                <Image src={'/Ad2.png'} alt="Logo" width={120} height={120} />
              </div>
              <div className='flex flex-col items-start justify-start gap-[0.5rem] '>
                <h1 className='text-[20px] w-[10rem] font-bold text-white'>Calculate your profits</h1>
                <div className='rounded-[8px] px-[0.75rem] py-[0.25rem] bg-white flex gap-[0.5rem] font-medium text-[14px] items-center'>
                  <a href="">Check now </a>
                  <FiArrowRight />
                </div>
              </div>
          </div>

          <div className='rounded-[8px] p-[0.75rem] w-[100%] sm:w-[388px] flex justify-start gap-[1.5rem] items-center' style={{background: 'linear-gradient(160deg, #FF9865 0%, #EF3031 80%)',}}>
              <div>
                <Image src={'/Ad1.png'} alt="Logo" width={120} height={120} />
              </div>
              <div className='flex flex-col items-start justify-start gap-[0.5rem] '>
                <h1 className='text-[20px] w-[10rem] font-bold text-white'>Calculate your tax liability</h1>
                <div className='rounded-[8px] px-[0.75rem] py-[0.25rem] bg-white flex gap-[0.5rem] font-medium text-[14px] items-center'>
                  <a href="">Check now </a>
                  <FiArrowRight />
                </div>
              </div>
          </div>
            </div>
          

      </div>
      
    </div>

  </div>
  )
}

export default About