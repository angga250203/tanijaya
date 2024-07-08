'use client'

import React, { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import AnimatedTextCharacter from '@/components/animation/animatedLetter'


export default function Section2() {




  return (
    <section className='max-w-6xl px-2 mx-auto min-h-screen mt-24'>
        <div className='flex flex-wrap justify-between'>
            <div className='w-full md:w-[35%]  '>
              <h1 className='text-[3rem] font-thin'>Layanan Kami</h1>
              <p>Tani Jaya berkomitmen untuk menyediakan sayuran segar berkualitas tinggi langsung dari petani lokal ke meja Anda, sambil mendukung komunitas petani dan mempromosikan gaya hidup sehat.</p>
              <button className='bg-green-500 mt-5 text-white rounded-full py-4 px-5'>Seputar Layanan Kami</button>
            </div>
            <div className='w-full mt-12 md:mt-0 md:w-[64%] flex-wrap flex  bg-gray-100 rounded-2xl'>
              <div className='w-full md:w-[49%]  h-[20vh] md:h-[40vh] relative m-1 rounded-2xl'>
                   <Image src="https://images.unsplash.com/photo-1624720114708-0cbd6ee41f4e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  layout='fill' loading="lazy" alt='timbangan' className='object-cover rounded-2xl shadow-lg '/>
              </div>
              <div className='w-full md:w-[49%] py-5 px-4 flex items-center'>
              <div>
                <h2 className='text-xl md:text-2xl'>Edukasi dan Informasi Pertanian</h2>
                <p className='mt-3 text-gray-500'>Kami berkomitmen untuk mengedukasi konsumen tentang pentingnya pertanian lokal dan manfaat kesehatan dari mengkonsumsi sayuran segar.</p>
                </div>
              </div>
            </div>
        </div>

        <div className='flex flex-wrap mt-12 justify-between'>
          <div className='w-full md:w-[64%] flex md:h-[40vh] bg-gray-100 rounded-2xl '>
          <div className='w-1/2 relative m-1 rounded-2xl'>
          <Image src="https://plus.unsplash.com/premium_photo-1678344151150-4a42c45453d5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  layout='fill' loading="lazy" alt='timbangan' className='object-cover rounded-2xl'/>
          
              </div>
              <div className='w-1/2 py-5 px-4 flex items-center'>
              <div>
                <h2 className='text-xl md:text-2xl'>Pembelian Sayuran Langsung dari Petani Lokal</h2>
                <p className='mt-3 text-gray-500'>Kami membeli sayuran langsung dari petani lokal untuk memastikan bahwa Anda mendapatkan produk yang segar dan berkualitas tinggi.</p>
                </div>
          </div>
          </div>
          <div className='w-full md:w-[35%] mt-12 md:mt-0 md:h-[40vh] bg-gray-100 rounded-2xl'>
              <div className='w-full h-[20vh] relative'>
                <Image src="https://images.unsplash.com/photo-1557844352-761f2565b576?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  layout='fill'  loading="lazy" alt='timbangan' className='object-cover rounded-2xl'/>
              </div>
              <div className='px-3 py-3'>
                <h1 className='text-xl'>Penyediaan Sayuran Berdasarkan Permintaan</h1>
                <p className='text-gray-500 mt-2'>Kami menyediakan beragam jenis sayuran sesuai dengan permintaan Anda, dalam jumlah dan jenis yang dibutuhkan.</p>
              </div>
          </div>
        </div>
    </section>
  )
}
