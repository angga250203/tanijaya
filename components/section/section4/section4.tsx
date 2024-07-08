'use client'

import React, { useState } from 'react'
import { AccordionDemo } from './accordion'
import {motion} from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa';

export default function Section4() {
  const anim = {
    initial: {
     scale:1
    },
    open: {scale:3,  transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {scale:1}

}



const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className='max-w-6xl px-5 mx-auto py-16 md:py-24 flex flex-wrap'>
      <header className='w-full md:w-1/2 border-b-2 md:border-b-0 pb-9  '>
        <motion.h1 className='text-[3rem] font-thin leading-none'>Pertanyaan yang sering diajukan</motion.h1>
        <p className='text-gray-500 max-w-lg mt-5'>Jika ada pertanyaan yang kurang jelas kamu bisa menanyakan kepada kami</p>

        <button onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='border-2 border-black items-center shadow-xl gap-7 mt-5 rounded-full flex justify-start text-black px-6 py-[20px]'>
        <span className='relative'>Hubungi <span className='font-semibold'>kami</span></span>
         <motion.div variants={anim} animate={isHover ? "open" : "closed"}
          className='bg-green-500 text-white flex justify-center items-center w-5 h-5 rounded-full' >
            {isHover? ( <FaArrowRight className='rotate-[-30deg] px-[5px] py-[5px]  '/>):
            ( <FaArrowRight className='rotate-[-30deg]  opacity-0 '/>)}
           
          
          </motion.div>
        
      </button>
      </header>

      <div className='w-full md:w-1/2'>
        <AccordionDemo/>
      </div>
    </div>
  )
}
