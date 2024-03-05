import React from 'react'

function RangeDiv({aTitle, aValue, bTitle, bValue}) {
  return (
    <div className='w-[100%] flex gap-[0.5rem] items-center justify-between'>

        <div className='w-[6rem]'>
            <h3 className='text-[13px] text-[#44475B]'>{aTitle}</h3>
            <span className='text-[15px]'>{aValue}</span>
        </div>

        <div className='flex-grow h-[4px] rounded-full bg-gradient-to-r from-[#FF4949] via-[#FC870A] to-[#11EB68]'></div>

        <div className='w-[5.5rem] flex flex-col justify-end-end'>
            <h3 className='text-[13px] text-[#44475B] w-[100%] text-end'>{bTitle}</h3>
            <span className=' w-[100%] text-[15px] text-end font-medium'>{bValue}</span>
        </div>

    </div>
  )
}

export default RangeDiv