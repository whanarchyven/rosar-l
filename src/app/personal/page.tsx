"use client"
import Image from 'next/image'
import ActionBanner from "@/components/ActionBanner";
import React, {useState} from "react";
import Pagination from "@/components/UI/Pagination";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

export default function Page() {

    const [addressPop,setAddressPop]=useState(false);
    const [userPop,setUserPop]=useState(false);

    return (
        <main className="relative">
            {addressPop?<div className={'w-full h-full backdrop-blur-xl rounded-lg flex justify-center items-center absolute left-0 top-0 z-[999]'}>
                <img onClick={()=>{setAddressPop(false)}} className={'absolute right-14 cursor-pointer top-14 w-7 aspect-square'} src={'/images/icons/close_filter.svg'}/>
                <div className={'w-96 bg-white shadow-xl p-4 flex flex-col gap-4 rounded-lg'}>
                    <p className={'text-2xl font-bold font-manrope'}>Добавить адрес</p>
                    <Input placeholder={'Индекс'} type={'text'} mutateFunction={()=> {}}></Input>
                    <Input placeholder={'Город'} type={'text'} mutateFunction={()=> {}}></Input>
                    <Input placeholder={'Улица'} type={'text'} mutateFunction={()=> {}}></Input>
                    <Input placeholder={'Дом'} type={'text'} mutateFunction={()=> {}}></Input>
                    <Input placeholder={'Контактный номер'} type={'text'} mutateFunction={()=> {}}></Input>
                    <Button callbackk={()=>{setAddressPop(false)}} type={'orange'}>Добавить</Button>
                </div>

            </div>:null}
            {userPop?<div className={'w-full h-full backdrop-blur-xl rounded-lg flex justify-center items-center absolute left-0 top-0 z-[999]'}>
                <img onClick={()=>{setUserPop(false)}} className={'absolute right-14 cursor-pointer top-14 w-7 aspect-square'} src={'/images/icons/close_filter.svg'}/>
                <div className={'w-96 bg-white shadow-xl p-4 flex flex-col gap-4 rounded-lg'}>
                    <p className={'text-2xl font-bold font-manrope'}>Добавить пользователя</p>
                    <Input placeholder={'Имя'} type={'text'} mutateFunction={()=> {}}></Input>
                    <Input placeholder={'Фамилия'} type={'text'} mutateFunction={()=> {}}></Input>
                    <Input placeholder={'Отчество'} type={'text'} mutateFunction={()=> {}}></Input>
                    <Input placeholder={'E-mail'} type={'text'} mutateFunction={()=> {}}></Input>
                    <Input placeholder={'Пароль'} type={'text'} mutateFunction={()=> {}}></Input>
                    <Button callbackk={()=>{setUserPop(false)}} type={'orange'}>Добавить</Button>
                </div>

            </div>:null}

            <div className={'grid grid-cols-12 gap-8'}>
                <div className={'col-span-5 bg-white shadow-lg p-8 rounded-lg'}>
                    <p className={'font-manrope font-bold text-2xl'}>Юридическая информация</p>
                    <p className={'font-travels font-medium text-blue mt-2 text-lg'}>Здесь вы можете редактировать свои данные</p>
                    <div className={'flex flex-col gap-7'}>
                        <div className={'flex flex-col mt-7 gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>Наименование организации</p>
                            <Input placeholder={'ООО “Росатом”'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>Юридический адрес</p>
                            <Input placeholder={'г. Москва, ул. Пупкина, д 4/2'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>ИНН</p>
                            <Input placeholder={'00000000'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>Генеральный директор</p>
                            <Input placeholder={'ООО “Росатом”'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>Наименование организации</p>
                            <Input placeholder={'ООО “Росатом”'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>Способ оплаты</p>
                            <Input placeholder={'ООО “Росатом”'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>

                    </div>
                </div>
                <div className={'flex col-span-7 flex-col gap-3'}>
                    <div className={'col-span-5 bg-white shadow-lg p-8 rounded-lg'}>
                        <p className={'font-manrope font-bold text-2xl'}>Адрес доставки</p>
                        <p className={'font-travels font-medium text-blue mt-2 text-lg'}>Здесь вы можете редактировать свои данные</p>
                        <div className={'flex flex-col gap-7'}>
                            <div className={'flex flex-col mt-7 gap-1'}>
                                <Input placeholder={'г. Москва, ул. Пупкина, д 4/2'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                            </div>
                            <div onClick={()=>{setAddressPop(true)}} className={'bg-[#F8F8FA] cursor-pointer px-3 w-full rounded-xl drop-shadow-md h-12 justify-between flex items-center gap-2'}>
                                <p className={'font-manrope font-semibold text-blue'}>Добавить адрес</p>
                                <img src={'/images/icons/plus_addres.svg'}/>
                            </div>

                        </div>
                    </div>
                    <div className={'col-span-5 bg-white shadow-lg p-8 rounded-lg'}>
                        <p className={'font-manrope font-bold text-2xl'}>Пользователи</p>
                        <p className={'font-travels font-medium text-blue mt-2 text-lg'}>Здесь вы можете редактировать свои данные</p>
                        <div className={'flex flex-col mt-7 gap-7'}>
                            <div className={'bg-[#F8F8FA] cursor-pointer px-3 w-full rounded-xl drop-shadow-md h-12 justify-between flex items-center gap-2'}>
                                <p className={'font-manrope font-semibold text-blue'}>Пономарев Виктор Алексеевич</p>
                                <p>Менеджер</p>
                            </div>
                            <div onClick={()=>{setUserPop(true)}} className={'bg-[#F8F8FA] cursor-pointer px-3 w-full rounded-xl drop-shadow-md h-12 justify-between flex items-center gap-2'}>
                                <p className={'font-manrope font-semibold text-blue'}>Добавить пользователя</p>
                                <img src={'/images/icons/plus_addres.svg'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'col-span-5 bg-white shadow-lg p-8 rounded-lg'}>
                    <p className={'font-manrope font-bold text-2xl'}>Платежная информация</p>
                    <p className={'font-travels font-medium text-blue mt-2 text-lg'}>Здесь вы можете редактировать свои данные</p>
                    <div className={'flex flex-col gap-7'}>
                        <div className={'flex flex-col mt-7 gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>Р/С</p>
                            <Input placeholder={'ООО “Росатом”'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>К/С</p>
                            <Input placeholder={'г. Москва, ул. Пупкина, д 4/2'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>ИНН</p>
                            <Input placeholder={'00000000'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>БИК</p>
                            <Input placeholder={'ООО “Росатом”'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-semibold text-blue '}>КПП (только для юр. лица)</p>
                            <Input placeholder={'ООО “Росатом”'} isInvert={true} icon={'/images/icons/edit.svg'} type={'text'} mutateFunction={()=>{}}></Input>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    )
}
