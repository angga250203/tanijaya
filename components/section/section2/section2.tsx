'use client'

import React, { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import AnimatedTextCharacter from '@/components/animation/animatedLetter'


export default function Section2() {


  
 
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);


  return (
    <section className='bg-gray-100 relative min-h-screen -z-20 py-20'>
      <div className='max-w-6xl mx-auto p-5'>
        <header className='pb-5'>
        <AnimatedTextCharacter text="Layanan Kami" />
       
          <p className='pt-3'>Tani Jaya berkomitmen untuk menyediakan sayuran segar berkualitas tinggi langsung dari petani lokal ke meja Anda, sambil mendukung komunitas petani dan mempromosikan gaya hidup sehat.</p>
         </header>
         <div className='flex flex-wrap mt-5 '>
            <div className='w-full md:w-1/2 gap-5 '>
              <div className='relative  overflow-hidden hidden md:block h-[35vh] w-[96%] rounded-xl'>
              <Image src="https://images.unsplash.com/photo-1624720114708-0cbd6ee41f4e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  layout='fill' loading="lazy" alt='timbangan' className='object-cover z-0 '/>
              </div>
              <article
              className={cn('lg:h-[35vh] mt-5 p-5 w-full md:w-[96%] rounded-xl', changeColor1 ? 'bg-yellow-500 text-white' : 'bg-white')}>
              
            
                   <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Edukasi dan Informasi Pertanian</h1>
                    <Switch 
                    checked={changeColor1}
                    onCheckedChange={setChangeColor1}
                    className='data-[state=checked]:bg-yellow-300 data-[state=unchecked]:bg-yellow-500'
                    />
                  </div>
                 <p className={cn('mt-3',changeColor1?'text-gray-100':'text-gray-500')}>Kami berkomitmen untuk mengedukasi konsumen tentang pentingnya pertanian lokal dan manfaat kesehatan dari mengkonsumsi sayuran segar. Melalui blog, newsletter, dan media sosial, kami berbagi informasi tentang cara-cara memasak yang sehat, manfaat sayuran tertentu, dan cerita dari petani lokal kami.</p>
              </article>
            </div>


            <div className='w-full md:w-1/2'>
              <div className='flex gap-5 mt-5 md:mt-0'>
                <div className='relative overflow-hidden h-[35vh] hidden md:block w-1/2 rounded-xl'>
                   <Image src="https://images.unsplash.com/photo-1557844352-761f2565b576?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  layout='fill'  loading="lazy" alt='timbangan' className='object-cover'/>
                
                </div>
                <article className={cn('lg:h-[35vh] p-5 w-full md:w-1/2 rounded-xl', changeColor2 ? 'bg-green-500 text-white' : 'bg-white')}>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Penyediaan Sayuran Berdasarkan Permintaan</h1>
                    <Switch checked={changeColor2}
                onCheckedChange={setChangeColor2}
                className='data-[state=checked]:bg-green-300 data-[state=unchecked]:bg-green-500'
                />
                  </div>
                 <p className={cn('mt-3',changeColor2?'text-gray-100':'text-gray-500')}>Kami menyediakan beragam jenis sayuran sesuai dengan permintaan Anda, dalam jumlah dan jenis yang dibutuhkan.</p>
                </article>
              </div>

              <div className='flex gap-5 mt-5'>
            
              <article className={cn('lg:h-[35vh] p-5 w-full md:w-1/2 rounded-xl', changeColor3 ? 'bg-purple-500 text-white' : 'bg-white')}>
                <div className='flex items-center justify-between'>
                  <h1 className='text-xl font-semibold'>Pembelian Sayuran Langsung dari Petani Lokal</h1>
                  <Switch
                checked={changeColor3}
                onCheckedChange={setChangeColor3}
                className='data-[state=checked]:bg-purple-300 data-[state=unchecked]:bg-purple-500'
                  />
                </div>
                <p className={cn(' mt-5', changeColor3?'text-gray-100':'text-gray-500')}>
                  Kami membeli sayuran langsung dari petani lokal untuk memastikan bahwa Anda mendapatkan produk yang segar dan berkualitas tinggi.
                </p>
              </article>

                <div className='h-[35vh] relative hidden md:block w-1/2 rounded-xl overflow-hidden'>
                  <Image src="https://plus.unsplash.com/premium_photo-1678344151150-4a42c45453d5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  layout='fill' loading="lazy" alt='timbangan' className='object-cover'/>
                </div>
              </div>
              
            </div>

         </div>
      </div>
    </section>
  )
}
