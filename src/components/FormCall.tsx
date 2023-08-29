"use client"
import React, {useState} from 'react';
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

const FormCall = () => {

    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [name,setName]=useState('')

    return (
        <form className={'flex gap-6 flex-col'}>
            <Input placeholder={'Email'} mutateValue={email} type={'text'} mutateFunction={setEmail}></Input>
            <Input placeholder={'Номер телефона'} mutateValue={phone} type={'text'} mutateFunction={setPhone}></Input>
            <Input placeholder={'Имя'} mutateValue={name} type={'text'} mutateFunction={setName}></Input>
            <Button className={'w-96 h-12'} type={'orange'}>Оставить заявку</Button>
        </form>
    );
};

export default FormCall;