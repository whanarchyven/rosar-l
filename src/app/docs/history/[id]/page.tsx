"use client"


import {useRouter, useSearchParams} from "next/navigation";
import datediff from "@/helpers/dateDiff";
import parseDate from "@/helpers/parseDate";
import Button from "@/components/UI/Button";

export default function Page() {
    const router = useRouter()
    const docs=[
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


    const id=useSearchParams().get('id')
    const doc=id?docs[Number(id)]:docs[0]

    return <div className={'w-full py-6'}>
        <div className={'flex items-start justify-between'}>
            <div className={'flex flex-col gap-1'}>
                <p className={'text-orange font-medium'}>Отправитель: {doc.sender}</p>
                <p className={'text-orange font-medium'}>{doc.phoneNumber}</p>
                <p className={'text-orange font-medium'}>{doc.email}</p>
            </div>
            <img className={'w-7 aspect-square cursor-pointer'} src={'/images/icons/close_orange.svg'} onClick={()=>{router.back()}}/>
        </div>
        <div className={'flex items-center justify-between'}>
            <p className={'font-travels text-3xl font-bold text-blue'}>{doc.title}</p>
            <p className={'my-5 font-travels font-bold text-xl text-orange'}>{doc.date}</p>
        </div>
        <div className={'flex flex-col mt-5 gap-2'}>
            <p className={'font-travels font-medium text-lg text-blue'}>{doc.caption} {doc.caption} {doc.caption} {doc.caption} {doc.caption} {doc.caption} {doc.caption} {doc.caption}</p>
            <div className={' flex flex-col gap-2'}>
                <p className={'font-medium text-orange'}>
                    Прикреплённые файлы:
                </p>
                <p className={'font-medium text-orange cursor-pointer underline'}>
                    somefilename.txt
                </p>
                <p className={'font-medium text-orange cursor-pointer underline'}>
                    somefilename.xls
                </p>
                <p className={'font-medium text-orange cursor-pointer underline'}>
                    somefilename.doc
                </p>
            </div>
            <div className={'flex gap-4 mt-5'}>
                <Button className={''} type={'orange'}><div className={'flex items-center'}><p>Скачать архив</p><img src={'/images/icons/import.svg'}/></div></Button>
                <Button className={''} type={'transparent blue'}>Ознакомиться и подписать ЭЦП</Button>
            </div>
        </div>


    </div>
}