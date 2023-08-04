"use client"
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import Help from "@/components/Help";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    const [loading, setLoading] = useState(true)

    const variants = {
        open: { opacity: 1,display:'flex'},
        closed: { opacity: 0,display:'none'},
    }

    useEffect(()=>{
        setTimeout(()=>{setLoading(false)},500)
    },[])
    return (
        <html lang="en">
        <body className={'scrollbar'}>
        <motion.div
            animate={loading ? "open" : "closed"}
            transition={{delay: 0.1}}
            variants={variants} className={'absolute flex items-center justify-center w-screen h-screen z-[9999] bg-white'}>
            <img src={'/images/loading.svg'} className={'animate-spin w-16 aspect-square'}/>
        </motion.div>
        <div className={'grid grid-cols-12 gap-8 px-[20px] py-[20px]'}>
            <div className={'col-span-2 relative'}>
                <div className={'w-full left-0 top-[20px] sticky'}>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className={'col-start-3 scrollbar col-end-12 relative'}>
                <div className={'left-0 top-[0px] pt-[20px] bg-white sticky z-[999] flex justify-between items-center'}>
                    <div className={'flex gap-3'}>
                        <div>
                            <img className={'w-16 aspect-square rounded-full border-4 border-orange'}
                                 src={'/images/temp/logo.png'}/>
                        </div>
                        <div className={'flex h-full flex-col'}>
                            <p className={'font-travels font-bold text-4xl text-blue'}>Росатом</p>
                            <p className={'font-travels font-medium text-xl text-blue'}>Личный кабинет партнёра</p>
                        </div>
                    </div>
                    <div className={'flex items-center flex-row gap-3'}>
                        <Help></Help>
                        <Settings></Settings>
                    </div>
                </div>
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}
