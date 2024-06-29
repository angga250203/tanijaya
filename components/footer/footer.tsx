import Image from 'next/image'
import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp,FaInstagram,FaFacebookSquare } from "react-icons/fa";
import { Input } from '../ui/input';


export default function Footer() {
  return (
    <section className=' bg-gray-100 relative'>
        <div className='max-w-6xl mx-auto flex justify-between flex-wrap px-3 py-20 '>
            <div className='w-full md:w-4/12 '>
            <Image src="/logo.png" alt='logo Tani jaya' width={90} height={90} priority/>
            <p className='text-gray-500'>Pengepul Sayuran dengan Kualitas Terbaik Diambil langsung dari Petani.</p>
            <div className='mt-5 text-gray-500'>
            <div className='flex items-center gap-2 '>
                    <IoLocationSharp/>
                    <p>Jln.Perhutani,Desa candipuro krajan</p>
                </div>
                <div className='flex items-center gap-2'>
                    <MdOutlineEmail/>
                    <p>support@tanijaya.com </p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaWhatsapp/>
                    <p>085575745378</p>
                </div>
            </div>
            </div>
          
            <div className='w-full md:w-6/12 py-20 '>
               <h1 className='text-2xl font-thin mb-5'>Get in touch</h1>
               <Input/>
               <button className='text-xl px-7 py-3 bg-green-500 mt-5 rounded-full text-white'>
                    Submit
               </button>
            </div>
        </div>

        <div className='left-1/2 -translate-x-1/2  absolute bottom-5 text-gray-400'>
            <h1 className='text-sm text-center'>Copyright ©2024 Tanijaya | All Rights Reserved</h1>
        </div>
    </section>
  )
}
