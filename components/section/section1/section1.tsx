'use client'

import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

export default function Section1() {
    
    const titleSlideUp = {
        initial: { x: 200 },
        animate: { x: 0 },
      }
      const anim = {
        initial: {width: 0,opacity:0},
        open: {width: "auto",opacity:1, transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
        closed: {width: 0,opacity:0}
    
    }
     
    const [isActive, setIsActive] = useState(false);
    
     const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }


  return (
    <section className='mt-12 md:mt-32 md:py-24  max-w-6xl mx-auto '>
        <header className='py-5 px-2'>
            <div className='overflow-hidden'>
             <motion.h1 
             variants={titleSlideUp}
             initial="initial"
             whileInView="animate"
             transition={transition}
             viewport={{ once: true }}
             className='text-[3rem] font-thin '>Tentang Kami</motion.h1>
             </div>
        </header>
    <article className=' flex flex-wrap '>
         <div className='w-full md:w-4/12 px-2'>
            <motion.h1
            whilein
            className='text-2xl pb-5  font-thin'>Jembatan Petani berdedikasi dan konsumen yang menghargai kesehatan dan kelezatan
            </motion.h1>
         </div>
        
        <div className='w-full md:w-8/12 px-2'>
            <p className=' font-thin '>
            Tani Jaya adalah UMKM yang membeli dan menjual sayuran langsung dari petani lokal, dengan fokus pada kualitas dan harga yang adil. Melalui jaringan yang luas, kami menghubungkan petani dengan pasar, mendukung ekonomi mereka.</p>

            <button onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className='px-7 mt-6  py-5 flex items-center justify-center gap-2 shadow-xl  text-white rounded-full bg-green-500 '>
          <motion.div variants={anim} animate={isActive ? "open" : "closed"}>
          <FaArrowRight/>
          </motion.div>
          <p>READ</p>
           <span className='font-semibold'>MORE</span>
        </button>
        </div>
    </article>
        <div className='flex gap-5 mt-12 '>
            <div className='w-full md:w-1/2'>
                <Image src="https://plus.unsplash.com/premium_photo-1683121448313-e3153e0c8e24?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='md:rounded-lg' alt='Farmer and consumer connection'  layout='responsive' loading='lazy' width={2940} height={1500}/>
            </div>

            <div className='hidden md:block  md:w-1/2 '>
                <Image src="https://plus.unsplash.com/premium_photo-1686156705940-71fa407f2a66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded-lg' alt='Fresh produce' layout='responsive' loading='lazy' width={2940} height={1500}/>
            </div>
        </div>
    
    </section>
  )
}
