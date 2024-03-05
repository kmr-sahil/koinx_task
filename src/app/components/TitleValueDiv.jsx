import React from 'react'

function TitleValueDiv({title, value}) {
  return (
    <div className='flex justify-between w-[100%] py-[0.5rem] border-b-[1px] border-[#DEE2E6]'>
        <h3 className='text-[#768396] text-[14px] font-medium'>{title}</h3>
        <span className='text-[13px] text-[#111827] font-semibold'>{value}</span>
    </div>
  )
}

export default TitleValueDiv