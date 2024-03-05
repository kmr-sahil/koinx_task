import React from 'react'
import TeamProfileCard from './TeamProfileCard'

function TeamSection() {
  return (
    <div className='flex flex-col items-start justify-stat w-[100%] p-[1rem] gap-[1.5rem]'>

    <div className='w-[100%] p-[0.75rem] bg-white border-[2px] border-[#DEE1E6] flex flex-col justify-center items-start gap-[1rem] rounded-[0.5rem]'>

        <h1 className='text-[24px] font-semibold'>Team</h1>

        <p>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>

        <TeamProfileCard profileImg={'/Profile2.png'} name={'John Smith'} designation={'Designation here'} />
        <TeamProfileCard profileImg={'/Profile1.png'} name={'Elina Williams'} designation={'Designation here'} />
        <TeamProfileCard profileImg={'/Profile3.png'} name={'John Smith'} designation={'Designation here'} />

    </div>

</div>
  )
}

export default TeamSection