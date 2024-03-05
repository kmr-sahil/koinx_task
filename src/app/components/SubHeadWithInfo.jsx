import React from 'react'
import { MdInfo } from "react-icons/md";

function SubHeadWithInfo({title}) {
  return (
    <div className='flex gap-[0.5rem] items-center'>
                            <h1 className='text-[#44475B] text-[18px] font-semibold'>{title}</h1>
                            <div className='text-[#ABB9BF] h-[16px] w-[16px]'>   
                                <MdInfo />
                            </div>
                    </div>
  )
}

export default SubHeadWithInfo