"use client"
import Image from 'next/image'
import Tab from "@/components/UI/Tab";
import Notification from "@/components/Notification";
import Button from "@/components/UI/Button";
import PostTab from "@/components/PostTab";
import ActionTab from "@/components/ActionTab";
import ReadMoreButton from "@/components/UI/ReadMoreButton";
import Link from "next/link";
import Input from "@/components/UI/Input";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {

    const [login,setLogin]=useState('')
    const [password,setPassword]=useState('')
    const router=useRouter();
    return (
        <main className="flex items-center p-6 justify-center">
            <Link href={'/landing'} className={'absolute cursor-pointer left-5 top-5 h-5 flex items-center gap-5 justify-center'}>
                <img className={'rotate-180'} src={'/images/icons/arrow_right_white.svg'}/>
                <p className={'border-b-2 border-white text-white'}>Вернуться</p>
            </Link>
            <div className={'w-full xl:w-96 flex gap-12 flex-col'}>
                <img src={'/images/logo.svg'} className={'w-full'}/>
                <div className={'w-full rounded-lg flex flex-col gap-4'}>
                    <Input icon={'/images/icons/login.svg'} placeholder={'Логин'} type={'text'} mutateValue={login} mutateFunction={setLogin}></Input>
                    <Input icon={'/images/icons/password.svg'} placeholder={'Пароль'} type={'password'} mutateValue={password} mutateFunction={setPassword}></Input>
                    <Button type={'orange'} callback={()=>{router.push('/')}}>Войти</Button>
                </div>
            </div>
        </main>
    )
}
