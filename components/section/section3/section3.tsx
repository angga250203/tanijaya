'use client'

import React from 'react'
import Video from './vidio/vidio'
import { datasection3 } from './datasection3'
import {motion} from 'framer-motion'

export default function Section3() {

    const titleSlideUp = {
        initial: { x: -200 },
        animate: { x: 0 },
      }

      const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <section className='min-h-screen px-3 max-w-6xl mx-auto py-24'>
        <header className='flex flex-wrap justify-between border-b-2 pb-5 items-end'>
            <motion.div
            variants={titleSlideUp}
            initial="initial"
            whileInView="animate"
            transition={transition}
            viewport={{ once: true }}
            className='leading-tight'>
                <h1 className='text-[3.5rem] font-thin'>Kenapa harus</h1>
                <h2 className='text-[3.5rem] font-thin'>Kami</h2>
            </motion.div>
            <p className='max-w-xl mt-5 text-gray-500'>Di Tani Jaya, kami berkomitmen untuk menjembatani kesenjangan antara petani lokal dan konsumen yang peduli dengan kesehatan dan menghargai hasil pertanian berkualitas tinggi. </p>
        </header>

        <div className='flex flex-wrap mt-12'>
            <article className='w-full md:w-[48%]'>

            {datasection3.map(({number,title,description}) => (
                 <div className='flex gap-5 py-7' key={number}>
                 <p className='text-2xl font-semibold'>{number} </p>
                 <div>
                      <h1 className='text-2xl font-semibold'>{title}</h1>
                      <p className='text-gray-500 mt-3'>{description}</p>
                 </div>
             </div>
            ))}
               


            </article>
            <div className='w-full md:w-[48%] '>
            <div className='flex gap-5 py-5'>
                 <p className='text-2xl font-semibold'>03</p>
                 <div>
                      <h1 className='text-2xl font-semibold'>Jaminan Kualitas</h1>
                      <p className='text-gray-500 mt-2'>Di Tani Jaya, kualitas adalah prioritas utama kami. Kami dengan cermat memilih dan memeriksa semua sayuran untuk memastikan mereka memenuhi standar tinggi kami. Pelanggan kami dapat mempercayai bahwa mereka mendapatkan hasil pertanian yang paling segar dan sehat.</p>
                 </div>
             </div>
                 <div className=' md:px-12'>
                     <Video/>
                 </div>
            </div>
        </div>
    </section>
  )
}
