import React from 'react';
import ReadMoreButton from "@/components/UI/ReadMoreButton";


interface notificationInterface {
    id:string,
    title:string,
    caption:string
}

const Notification = ({id, title, caption}:notificationInterface) => {
    return (
        <div className={'w-full flex flex-col gap-2 p-2'}>
            <p className={'font-travels text-blue font-bold text-xl'}>{title}</p>
            <p className={'font-travels font-medium text-justify text-blue'}>{caption.split(' ').splice(0,15).join(' ')} ...</p>
            <div className={'w-full flex items-center justify-end'}>
                <ReadMoreButton title={'Читать полностью'}></ReadMoreButton>
            </div>
        </div>
    );
};

export default Notification;