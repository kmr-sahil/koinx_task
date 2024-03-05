import React from 'react'
import Image from 'next/image';

function TeamProfileCard({profileImg ,name, designation}) {
  return (
    <div className='rounded-[8px] bg-[#0084ff0c] w-[100%] flex flex-col sm:flex-row items-center justify-center gap-[0.5rem] p-[1rem]'>

                        <div className='w-[128px] h-[128px] flex flex-col items-center justify-center gap-[0.25rem]'>
                          <div className='w-[100px] h-[150px] mx-[0.75rem] rounded-md overflow-hidden'><Image src={`${profileImg}`} alt='img' width={100} height={150} /></div>
                          <h2 className='text-[15px] font-medium leading-tight'>{name}</h2>
                          <span className='text-[12px] leading-tight'>{designation}</span>
                        </div>

                        <p className=''>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                    
                    </div>
  )
}

export default TeamProfileCard