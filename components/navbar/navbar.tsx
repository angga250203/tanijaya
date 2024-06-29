'use client'

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { datanav } from './datanav'
import Image from 'next/image'
import Navmobile from './mobilenav'
import { NavItem } from '@/app/type'
import {motion, useMotionValue, useMotionValueEvent, useScroll} from 'framer-motion'
import { match } from 'assert'


export default function Navbar() {

    const [isHidden,setHidden] = useState(false);
    const {scrollY} = useScroll();
    const lastRef = useRef(0);

    useMotionValueEvent( scrollY,"change",(y) => {
        const difference = y - lastRef.current;
        if (Math.abs(difference) > 50) {
            setHidden(difference > 0 ) ;

            lastRef.current = y
        }

    })

  return (
    <motion.div 
    
    animate={isHidden ? "hidden" : "visible"}
    whileHover="visible"
    onFocusCapture={() => setHidden(false)}
    variants={{
        hidden:{
            y:"-120%",

        },
        visible:{
            y:"0%"
        }
    }}
    transition={{duration:0.2}}


    
    className='fixed flex justify-center top-3 w-full '>
 
            <div className=' flex w-[75rem] rounded-lg justify-between backdrop-blur-xl bg-white/30  px-5 items-center py-2 '>
                <Image src="/logo.png" alt='logo Tani jaya' width={70} height={70} priority/>

                <div className='hidden md:flex items-center gap-5 '>
                {datanav.map(({title,href}:NavItem) => (
                    <Link href={href} key={title}>
                        <p className='text-lg'>{title}</p>
                    </Link>
                ))}    
                </div>

                <div className='block md:hidden'>
                    <Navmobile datanav={datanav}/>
                </div>
            </div>
        </motion.div>

   
  )
}
