import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from "react-icons/fi";


function page() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-[1rem]'>

      <div className='w-[80%] tablet:w-[40%]'>
          <img src='/contact.png' />
      </div>

      <Link href={'/coins/bitcoin'} className='w-[80%] tablet:w-[40%] font-semibold bg-[#1053FF] flex items-center justify-center py-[1rem] rounded-[1rem] text-white gap-[0.5rem] hover:gap-[1rem] transition-all duration-300'> View the project <FiArrowRight /></Link>        
    </div>
  )
}

export default page