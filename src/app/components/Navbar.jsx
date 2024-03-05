"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Logo from '../asset/Logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

    const [visible, setVisible] = useState(false)
    const toggleMenu = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        const handleResize = () => {
            // Check if the window width is greater than or equal to 768px (tablet breakpoint)
            if (window.innerWidth >= 768) {
                setVisible(true);
            }
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize to set initial state based on window width
        handleResize();

        // Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>
        <nav className=' relative w-[100%] h-[64px] bg-white shadow-[0_1px_8px_0px_rgba(0,0,0,0.05)]'>

            <div className='flex justify-between items-center px-[1.5rem] tablet:px-[2rem]'>

                <div>
                    <Image src={Logo} alt="Logo" width={81} height={21} />
                </div>

                <div className='block tablet:hidden' onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </div>

                {visible && <div className='bg-white absolute flex flex-col items-end top-[3rem] right-[1rem] p-[0.5rem] rounded-md tablet:relative tablet:top-[0.1rem] tablet:bg-none tablet:flex-row tablet:p-[0] justify-center tablet:items-center gap-[2rem] font-semibold '>
                    <a href="/">Crypto Taxes</a>
                    <a href="/">Free Tool</a>
                    <a href="/">Resource Center</a>
                    <a className='px-[1rem] py-[0.5rem] bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] rounded-[0.5rem] text-white' href="/">Get Started</a>
                </div>}

            </div>

        </nav>
    </>
  )
}

export default Navbar