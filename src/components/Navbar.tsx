"use client"
import React, {useState} from 'react';
import {usePathname, useRouter} from "next/navigation";
import {motion} from "framer-motion";
import {classList} from "@/helpers/classList";
import Link from "next/link";

const Navbar = () => {

    const links = [
        {
            name: 'Каталог',
            link: '/catalog',
            icon: 'catalog.svg'
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
            name: 'Акции',
            link: '/actions',
            icon: 'actions.svg'
        },
        {
            name: 'Отгрузки',
            link: '/deliveries',
            icon: 'delivery.svg'
        },
    ]

    const landingLinks=[
        {
            name: 'О компании',
            link: '#company',
            icon: 'catalog.svg'
        },
        {
            name: 'Преимущества',
            link: '#features',
            icon: 'docs.svg'
        },
        {
            name: 'Оптовым партнёрам',
            link: '#opt',
            icon: 'news.svg'
        },
        {
            name: 'Партнёры',
            link: '#partners',
            icon: 'actions.svg'
        },
        {
            name: 'Контакты',
            link: '#contacts',
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

    if(pathname!='/landing'){
        return (
            <div className={'w-full h-full flex'} >
                {links.map((link) => {
                    return(
                        <div key={link.link}
                             className={classList('flex  w-full cursor-pointer rounded-full items-center justify-start')}>
                            <Link href={link.link}>
                                <p
                                    className={classList(' font-manrope text-md font-light',pathname==link.link?'text-white':'text-white')}>{link.name}</p>
                            </Link>
                        </div>
                    )
                })}

            </div>
        );
    }
    else{
        return (
            <div className={'w-full h-full flex'} >
                {landingLinks.map((link) => {
                    return(
                        <div key={link.link}
                             className={classList('flex  w-full cursor-pointer rounded-full items-center justify-start')}>
                            <Link href={link.link}>
                                <p
                                    className={classList(' font-manrope text-md font-light',pathname==link.link?'text-white':'text-white')}>{link.name}</p>
                            </Link>
                        </div>
                    )
                })}

            </div>
        );

    }


};




export default Navbar;