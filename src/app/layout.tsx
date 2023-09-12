"use client"
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import Help from "@/components/Help";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";
import {classList} from "@/helpers/classList";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    const [loading, setLoading] = useState(true)

    const pathname=usePathname();
    const landing='/landing'
    console.log(pathname)

    const variants = {
        open: {opacity: 1, display: 'flex'},
        closed: {opacity: 0, display: 'none'},
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    const [isOpen,setIsOpen]=useState(false)


    return (
        <html lang="en">
        <body className={'scroll-smooth scrollbar'}>
        <motion.div
            animate={loading ? "open" : "closed"}
            transition={{delay: 0.1}}
            variants={variants}
            className={'absolute flex items-center justify-center w-screen h-screen z-[9999] bg-white'}>
            <img src={'/images/loading.svg'} className={'animate-spin w-16 aspect-square'}/>
        </motion.div>
        <div className={''}>
            <div className={classList('grid px-[70px] w-full py-[20px] items-center grid-cols-12 gap-8',pathname!=landing?'bg-blue':'bg-transparent absolute top-0 z-[20]')}>
                {pathname!=landing?<div className={'col-span-3 scrollbar relative'}>
                    <div className={'left-0 top-[0px] sticky z-[999] flex justify-between items-center'}>
                        <Link href={'/'}>
                            <div className={'flex gap-3'}>
                                <div>
                                    <img className={'w-12 aspect-square rounded-full border-[1px] border-white'}
                                         src={'/images/temp/logo.png'}/>
                                </div>
                                <div className={'flex h-full flex-col'}>
                                    <p className={'font-travels font-bold text-2xl text-white'}>Росатом</p>
                                    <p className={'font-travels font-medium text-sm text-white'}>Личный кабинет партнёра</p>
                                </div>
                            </div>
                        </Link>
                        {/*<div className={'flex items-center flex-row gap-3'}>*/}
                        {/*    <Help></Help>*/}
                        {/*    <Settings></Settings>*/}
                        {/*</div>*/}
                    </div>
                </div>:null}
                <div className={classList('relative',pathname!=landing?'col-span-7':'col-span-10')}>
                    <Navbar></Navbar>
                </div>
                <div>

                </div>
                <div className={'flex gap-8 items-center justify-end'}>
                    <Link href={'/cart'}>
                        <img src={'/images/icons/shop.svg'}/>
                    </Link>
                    <div className={'relative flex items-end'} onMouseEnter={()=>{setIsOpen(true)}}>
                        <img src={'/images/icons/account.svg'}/>
                        {isOpen?<div className={'bg-white flex flex-col gap-1 p-3 absolute top-10 right-0 z-[50] rounded-lg'} onMouseLeave={()=>{setIsOpen(false)}}>
                            <Link className={'whitespace-nowrap font-manrope font-semibold text-blue'} href={'/personal'}>Личный кабинет</Link>
                            <Link className={'whitespace-nowrap font-manrope font-semibold text-blue'} href={'/'}>Выйти</Link>
                        </div>:false}
                    </div>
                </div>
            </div>
            <div className={classList(pathname!=landing?'relative px-[70px] py-[20px]':'relative px-[70px')}>
                {pathname!=landing?<div className={'bg-blue w-full left-0 h-72 rounded-b-3xl absolute top-0 z-[0]'}>

                </div>:null}
                <div className={classList(pathname!=landing?'absolute w-full bg-transparent left-0 px-[70px] pt-[80px] pb-20 top-0 z-[1]':'absolute w-full bg-transparent left-0 top-0 z-[1]')}>
                    {children}
                </div>

            </div>
        </div>
        </body>
        </html>
    )
}
