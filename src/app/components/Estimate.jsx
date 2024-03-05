import React from 'react'

function Estimate({title, color, perecentValue}) {
  return (
    <div className='flex items-center justify-center w-[100%] text-[#ABB9BF] font-medium text-[14px]'>
                                    <h3 className='w-[53px]'>{title}</h3>
                                    <div className='w-[100%] h-[6px] flex gap-[0.5rem] items-center'>
                                        <div className=' h-[6px]' style={{backgroundColor: `${color}`, width: `${perecentValue}%`}}></div>
                                        <span>{perecentValue}%</span>
                                    </div>
                            </div>
  )
}

export default Estimate