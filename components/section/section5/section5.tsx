'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import {motion} from 'framer-motion'

export default function Section5() {

 const anim = {
    initial: {width: 0,opacity:0},
    open: {width: "auto",opacity:1, transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0,opacity:0}

    }

    const titleSlideUp = {
      initial: { y: 200 },
      animate: { y: 0 },
    }
    
 const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }
 
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='px-2 relative -z-10'>
    <div className='max-w-6xl relative mx-auto my-12 flex flex-wrap h-[70vh] md:h-[50vh] overflow-hidden rounded-2xl bg-green-500'>
        <div className='relative w-full md:w-1/2 md:order-first order-last'>
            <Image src="/driver.png" alt='driver' width={2000} height={2000}/>
        </div>

        <div className='w-full md:w-1/2 py-16 px-3'>
          <div className='overflow-hidden'>
            <motion.h1
            variants={titleSlideUp}
            initial="initial"
            animate="animate"
            transition={transition}
            className='text-[1.7rem] md:text-[2rem] font-light md:font-thin text-white '>"Kami Jemput Hasil Panen Anda, Tanpa Biaya Tambahan!"
            </motion.h1>
            </div>
            <p className='text-gray-100 mt-2'>hubungi tim kami untuk mengatur jadwal penjemputan serta titik penjemputan lewat tombol di bawah ini</p>

            <button onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className='px-7 mt-6  py-5 flex items-center justify-center gap-2 shadow-xl  text-green-500 rounded-full bg-white '>
          <motion.div variants={anim} animate={isActive ? "open" : "closed"}>
          <IoIosArrowDropright className='text-3xl'/>
          </motion.div>
          <p>Jemput</p>
           <span className='font-semibold'>Gratis</span>
        </button>
        </div>
    </div>
    </div>
  )
}
