import React from 'react'
import Image from 'next/image';

function NewsCard({icon, bgColor, accColor}) {
  return (
    <div className='flex-shrink-0 w-[319px] tablet:w-[520px] flex items-start justify-between p-[0.75rem] gap-[0.5rem] rounded-[8px] bg-[#E8F4FD]' style={{ backgroundColor: `${bgColor}` }}>

        <div className=' w-[30px] h-[30px] flex items-center justify-center rounded-full flex-shrink-0' style={{ backgroundColor: `${accColor}` }}>
            <Image src={`${icon}`} alt="Logo" width={15} height={12} />
        </div>
        
        <div className='flex flex-col gap-[0.5rem]'>
            <h3 className='text-[13px] tablet:text-[15px] leading-snug font-medium text-[#000000]'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim </h3>
            <p className='text-[11px] tablet:text-[13px] leading-snug font-light text-[#000000]'>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
        </div>

    </div>
  )
}

export default NewsCard