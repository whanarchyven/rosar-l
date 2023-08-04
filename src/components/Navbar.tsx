"use client"
import React, {useState} from 'react';
import {usePathname, useRouter} from "next/navigation";
import {motion} from "framer-motion";
import {classList} from "@/helpers/classList";
import Link from "next/link";

const Navbar = () => {

    const links = [
        {
            name: 'Главная',
            link: '/',
            icon: 'dashboard.svg'
        },
        {
            name: 'Акции',
            link: '/actions',
            icon: 'actions.svg'
        },
        {
            name: 'Документы',
            link: '/docs',
            icon: 'docs.svg'
        },
        {
            name: 'Новости',
            link: '/news',
            icon: 'news.svg'
        },
        {
            name: 'Каталог',
            link: '/catalog',
            icon: 'catalog.svg'
        },
        {
            name: 'Отгрузки',
            link: '/deliveries',
            icon: 'delivery.svg'
        },
    ]

    const router = useRouter()

    const pathname = usePathname()

    const [isHovered, setIsHovered] = useState(false)

    const variants = {
        open: {opacity: 1, width: '100%'},
        closed: {opacity: 1, width: '36%'},
    }

    const subVariants = {
        closed: {opacity:0,display:'none'},
        open: {opacity:1,display:'flex',transition:{delay:0.3}}
    }


    return (
        <div className={'w-full h-full '} onMouseLeave={() => {
            setIsHovered(false);
        }}>
            <motion.div onMouseEnter={() => {
                setIsHovered(true);
            }}
                        animate={isHovered ? "open" : "closed"}
                        variants={variants}
                        className={'rounded-3xl p-3 overflow-hidden flex w-20 flex-col gap-3 bg-blue h-full'}>
                {links.map((link) => {
                    return(
                        <div key={link.link}
                             className={classList('flex  w-full cursor-pointer rounded-full items-center justify-start',pathname==link.link?'bg-white':'bg-transparent')}>
                            <Link href={link.link}>
                                <img className={'w-[56px] aspect-square'}
                                     src={pathname==link.link?`/images/navbar_icons/active/${link.icon}`:`/images/navbar_icons/simple/${link.icon}`}/>
                            </Link>
                            <Link href={link.link}>
                                <motion.p
                                    animate={isHovered ? "open" : "closed"}
                                    variants={subVariants}
                                    className={classList(' font-travels text-xl font-bold',pathname==link.link?'text-orange':'text-white')}>{link.name}</motion.p>
                            </Link>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    );
};


// <div className={'rounded-3xl overflow-hidden p-3 flex w-full flex-col gap-3 bg-blue h-full'} onMouseLeave={()=>{setIsHovered(false);}}>
//     {links.map((link)=>{
//         if(pathname==link.link){
//             return(
//                 <div key={link.link} className={'flex w-full cursor-pointer bg-white rounded-full items-center justify-start gap-3'}>
//                     <img className={'w-[56px] aspect-square'} src={`/images/navbar_icons/active/${link.icon}`}/>
//                     <p className={' font-travels text-blue text-xl font-bold'}>{link.name}</p>
//                 </div>
//             )
//         }
//         else{
//             return(
//                 <div key={link.link} className={'flex w-full cursor-pointer items-center justify-start gap-3'} onClick={()=>{router.push(link.link)}}>
//                     <img className={'w-[56px] aspect-square'} src={`/images/navbar_icons/simple/${link.icon}`}/>
//                     <p className={' font-travels text-white text-xl font-bold'}>{link.name}</p>
//                 </div>
//             )
//         }
//     })}
// </div>

export default Navbar;