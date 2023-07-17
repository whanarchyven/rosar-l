"use client"
import Image from 'next/image'
import {useState} from "react";
import {classList} from "@/helpers/classList";
import DocBanner from "@/components/DocBanner";

export default function Home() {
    const [currentTab,setCurrentTab]=useState('new')
    const docs=[
        {
            id:0,
            title: 'Смета на продукцию за май',
            caption: 'Выставлен компанией "Электро-Мастер". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '20.04.24',
            sender: 'Сидоров Иван',
            phoneNumber: '+7 (123) 456-7890',
            email: 'sidorov@example.com'
        },
        {
            id:1,
            title: 'Смета на продукцию за июнь',
            caption: 'Выставлен компанией "Техно-Энерго". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '15.05.24',
            sender: 'Петрова Екатерина',
            phoneNumber: '+7 (234) 567-8901',
            email: 'petrova@example.com'
        },
        {
            id:2,
            title: 'Смета на продукцию за июль',
            caption: 'Выставлен компанией "Энерго-Сервис". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '10.06.24',
            sender: 'Козлов Владимир',
            phoneNumber: '+7 (345) 678-9012',
            email: 'kozlov@example.com'
        },
        {
            id:3,
            title: 'Смета на продукцию за август',
            caption: 'Выставлен компанией "Тех-ЭнергоПлюс". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '05.07.24',
            sender: 'Смирнов Олег',
            phoneNumber: '+7 (456) 789-0123',
            email: 'smirnov@example.com'
        },
        {
            id:4,
            title: 'Смета на продукцию за сентябрь',
            caption: 'Выставлен компанией "Электро-Техника". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '20.08.24',
            sender: 'Михайлов Сергей',
            phoneNumber: '+7 (567) 890-1234',
            email: 'mikhailov@example.com'
        },
        {
            id:5,
            title: 'Смета на продукцию за октябрь',
            caption: 'Выставлен компанией "ТехЭнергоСервис". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '15.09.24',
            sender: 'Кузнецов Андрей',
            phoneNumber: '+7 (678) 901-2345',
            email: 'kuznetsov@example.com'
        },
        {
            id:6,
            title: 'Смета на продукцию за ноябрь',
            caption: 'Выставлен компанией "ЭнергоСервисПлюс". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '10.10.24',
            sender: 'Иванов Дмитрий',
            phoneNumber: '+7 (789) 012-3456',
            email: 'ivanov@example.com'
        },
        {
            id:7,
            title: 'Смета на продукцию за декабрь',
            caption: 'Выставлен компанией "Техно-ЭнергоПрофессионал". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '05.11.24',
            sender: 'Петрова Ольга',
            phoneNumber: '+7 (890) 123-4567',
            email: 'petrova@example.com'
        },
        {
            id:8,
            title: 'Смета на продукцию за январь',
            caption: 'Выставлен компанией "ЭлектроТехникаПлюс". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '20.12.24',
            sender: 'Смирнов Иван',
            phoneNumber: '+7 (012) 345-6789',
            email: 'smirnov@example.com'
        },
        {
            id:9,
            title: 'Смета на продукцию за февраль',
            caption: 'Выставлен компанией "Техно-ЭлектроСервис". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '15.01.25',
            sender: 'Козлова Анна',
            phoneNumber: '+7 (345) 678-9012',
            email: 'kozlova@example.com'
        },
        {
            id:10,
            title: 'Смета на продукцию за март',
            caption: 'Выставлен компанией "Техно-ЭнергоПро". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '20.02.25',
            sender: 'Сидоров Иван',
            phoneNumber: '+7 (567) 890-9012',
            email: 'sidorov@example.com'
        }
    ]

    const history=[
        {
            id:0,
            title: 'Смета на продукцию за август',
            caption: 'Выставлен компанией "ЭнергоТехСервис". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '05.07.24',
            sender: 'Козлов Владимир',
            phoneNumber: '+7 (456) 789-0123',
            email: 'kozlov@example.com'
        },
        {
            id:1,
            title: 'Смета на продукцию за сентябрь',
            caption: 'Выставлен компанией "ТехноЭнергоПроф". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '20.08.24',
            sender: 'Сидорова Екатерина',
            phoneNumber: '+7 (567) 890-1234',
            email: 'sidorova@example.com'
        },
        {
            id:2,
            title: 'Смета на продукцию за октябрь',
            caption: 'Выставлен компанией "ЭнергоСервисПлюс". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '15.09.24',
            sender: 'Михайлов Сергей',
            phoneNumber: '+7 (678) 901-2345',
            email: 'mikhailov@example.com'
        },
        {
            id:3,
            title: 'Смета на продукцию за ноябрь',
            caption: 'Выставлен компанией "ТехноЭлектроСервис". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '10.10.24',
            sender: 'Кузнецов Андрей',
            phoneNumber: '+7 (789) 012-3456',
            email: 'kuznetsov@example.com'
        },
        {
            id:4,
            title: 'Смета на продукцию за декабрь',
            caption: 'Выставлен компанией "ЭнергоМастерПро". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '05.11.24',
            sender: 'Иванов Дмитрий',
            phoneNumber: '+7 (890) 123-4567',
            email: 'ivanov@example.com'
        },
        {
            id:5,
            title: 'Смета на продукцию за январь',
            caption: 'Выставлен компанией "ТехЭнергоПрофессионал". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '20.12.24',
            sender: 'Петрова Ольга',
            phoneNumber: '+7 (901) 234-5678',
            email: 'petrova@example.com'
        },
        {
            id:6,
            title: 'Смета на продукцию за февраль',
            caption: 'Выставлен компанией "ЭлектроТехникаПлюс". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '15.01.25',
            sender: 'Смирнов Иван',
            phoneNumber: '+7 (012) 345-6789',
            email: 'smirnov@example.com'
        },
        {
            id:7,
            title: 'Смета на продукцию за март',
            caption: 'Выставлен компанией "Техно-ЭнергоПро". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '20.02.25',
            sender: 'Козлова Анна',
            phoneNumber: '+7 (345) 678-9012',
            email: 'kozlova@example.com'
        },
        {
            id:8,
            title: 'Смета на продукцию за апрель',
            caption: 'Выставлен компанией "ЭнергоСервисГрупп". Просьба ознакомиться с отчётами компании и КП, выставить счёт и подписать договор.',
            date: '15.03.25',
            sender: 'Сидоров Иван',
            phoneNumber: '+7 (567) 890-1234',
            email: 'sidorov@example.com'
        }
    ]

    const [currentDocs,setCurrentDocs]=useState(docs)

  return (
    <main className="mt-5">
        <p className={'font-bold font-travels text-blue text-3xl'}>Акции и эксклюзивные предложения</p>
        <div className={'flex items-center gap-5 mt-4'}>
            <div className={classList('flex p-2 font-bold text-blue text-lg transition-all duration-200 items-center border-b-2 justify-center',currentTab=='new'?'border-orange':'border-blue cursor-pointer')} onClick={()=>{setCurrentTab('new');setCurrentDocs(docs)}}>
                Основные документы
            </div>
            <div className={classList('flex p-2 font-bold text-blue text-lg transition-all duration-200 items-center border-b-2 justify-center',currentTab=='history'?'border-orange':'border-blue cursor-pointer')} onClick={()=>{setCurrentTab('history');setCurrentDocs(history)}}>
                История подписанных документов
            </div>
        </div>
        <div className={'grid mt-4 grid-cols-2 gap-5'}>
            {currentDocs.map((doc,counter)=>{
                return (
                    <DocBanner currentTab={currentTab} key={counter} {...doc}></DocBanner>
                )
            })}
        </div>
    </main>
  )
}
