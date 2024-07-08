'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'


export default function Hero() {
  const anim = {
    initial: {
     scale:1
    },
    open: {scale:3,  transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {scale:1}

}

    const titleSlideUp = {
        initial: { y: 200 },
        animate: { y: 0 },
      }

      const separate = {
        hidden: { opacity: 0, y: 0 },
        visible: (custom: number) => ({
          opacity: 1,
          y: custom * 5,
          transition: { duration: 1.5 },
        }),
      };
      
      const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }
      const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <motion.div className='max-w-6xl mx-auto min-h-screen pt-[7rem] '>

        <div className='flex flex-wrap justify-between items-end p-2'>
                <div className='mt-5  md:mt-12 md:w-5/12 w-full text-center md:text-left leading-tight'>
                <div className='overflow-hidden'>
                    <motion.h1 
                        variants={titleSlideUp}
                        initial="initial"
                        animate="animate"
                        transition={transition}
                    className='md:text-[4rem] text-[2.5rem] font-extralight  md:font-thin'>Pengepul Sayuran</motion.h1>
                 </div>
                 <div className='overflow-hidden'>
                    <motion.h2
                     variants={titleSlideUp}
                     initial="initial"
                     animate="animate"
                     transition={{...transition,delay:0.5}}
                    className='md:text-[4rem] text-[2.5rem]  font-thin'> Tani jaya</motion.h2>
                    </div>
                </div>
                <div className='md:w-4/12 text-xl w-full mt-3 md:mt-0'>
                    <motion.div
                    variants={separate}
                    initial="hidden"
                    animate="visible"
                    className='text-gray-500 text-base text-center md:text-start px-5'> Sayuran dengan Kualitas Terbaik Diambil langsung dari Petani</motion.div>
                </div>


     <div className='md:w-3/12 flex justify-center mt-5 w-full md:text-end text-start'>
     <button onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='border-[1px] md:border-[2px]  border-green-400 bg-green-500  items-center shadow-xl gap-7 rounded-full flex justify-start text-white px-6 py-[20px]'>
        <span className='relative'>Gabung <span className='font-semibold'>Sekarang</span></span>
         <motion.div variants={anim} animate={isHover ? "open" : "closed"}
          className='bg-white text-green-500 flex justify-center items-center w-5 h-5 rounded-full' >
            {isHover? ( <FaArrowRight className='rotate-[-30deg] px-[5px] py-[5px]  '/>):
            ( <FaArrowRight className='rotate-[-30deg]  opacity-0 '/>)}
           
          
          </motion.div>
        
      </button>
                </div>
        </div>
        <div className='h-[50vh] md:h-[60vh] -z-10 relative block mt-16'>
           <Image 
           src="/hero.jpg" 
           alt='petani' 
           className='object-cover md:rounded-2xl' 
           fill  
           loading='lazy'
           />
        </div>

       
    </motion.div>
  )
}
