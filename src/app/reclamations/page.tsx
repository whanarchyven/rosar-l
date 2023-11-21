"use client"
import Image from 'next/image'
import {useState} from "react";
import {classList} from "@/helpers/classList";
import DocBanner from "@/components/DocBanner";
import Link from "next/link";
import Button from "@/components/UI/Button";
import Pagination from "@/components/UI/Pagination";
import ReclamationBanner, {translateType} from "@/components/ReclamationBanner";
import Input from "@/components/UI/Input";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DragNDrop from "@/components/UI/DragNDrop";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Home() {

    const createPDF = async () => {

        const pdf = new jsPDF("portrait", "pt", "a4");
        // @ts-ignore
        const data = await html2canvas(document.querySelector("#pdf"));
        const img = data.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);

        pdf.save("Новая_рекламация.pdf");
    };



    const [currentTab, setCurrentTab] = useState('active')
    const docs: Array<{
        id: number,
        title: string,
        type: 'quality' | 'wardrobe' | 'damaged' | 'refund',
        date: string
        status: 'pending' | 'rejected' | 'done',
        product: string,
        description: string
    }
    > = [
        {
            id: 0,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'damaged',
            date: '20.11.23',
            status: 'pending',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 1,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'damaged',
            date: '20.11.23',
            status: 'pending',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 2,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'wardrobe',
            date: '20.11.23',
            status: 'pending',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 3,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'quality',
            date: '20.11.23',
            status: 'pending',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 4,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'wardrobe',
            date: '20.11.23',
            status: 'pending',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        }, {
            id: 5,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'damaged',
            date: '20.11.23',
            status: 'pending',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 6,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'damaged',
            date: '20.11.23',
            status: 'pending',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 7,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'wardrobe',
            date: '20.11.23',
            status: 'pending',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        }, {
            id: 8,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'quality',
            date: '20.11.23',
            status: 'pending',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 8,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'quality',
            date: '20.11.23',
            status: 'done',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 8,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'quality',
            date: '20.11.23',
            status: 'done',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 8,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'wardrobe',
            date: '20.11.23',
            status: 'rejected',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 8,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'damaged',
            date: '20.11.23',
            status: 'rejected',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 8,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'quality',
            date: '20.11.23',
            status: 'done',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 8,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'quality',
            date: '20.11.23',
            status: 'done',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 8,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'quality',
            date: '20.11.23',
            status: 'done',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },
        {
            id: 8,
            title: 'Рекламация ООО РОСАТОМ',
            type: 'quality',
            date: '20.11.23',
            status: 'done',
            product: 'Розетки WSLJ00421',
            description: 'Плохие розетки'
        },


    ]

    const [currentType, setCurrentType] = useState<'quality' | 'wardrobe' | 'damaged' | 'refund'>('quality')

    const [creationDate, setCreationDate] = useState<Date>(new Date())

    const [defectDate, setDefectDate] = useState<Date>(new Date())

    const [articulQnt, setArticulQnt] = useState([1])


    const [documentsQnt, setDocumentsQnt] = useState([1])


    return (
        <main className="">
            <div className={'flex items-center justify-between'}>
                <p className={'font-bold font-manrope text-white text-3xl'}>Рекламации</p>
                <div className={'flex items-center gap-12'}>
                    <div className={'flex items-center font-manrope gap-12 '}>
                        <div
                            className={classList('flex p-2 font-bold text-white text-lg transition-all duration-200 items-center border-b-2 justify-center', currentTab == 'active' ? 'border-white' : 'border-blue cursor-pointer')}
                            onClick={() => {
                                setCurrentTab('active');
                            }}>
                            Активные
                        </div>
                        <div
                            className={classList('flex p-2 font-bold text-white text-lg transition-all duration-200 items-center border-b-2 justify-center', currentTab == 'closed' ? 'border-white' : 'border-blue cursor-pointer')}
                            onClick={() => {
                                setCurrentTab('closed');
                            }}>
                            Закрытые
                        </div>
                        <Button callback={() => {
                            setCurrentTab('new')
                        }} type={'orange'}>Создать рекламацию</Button>
                    </div>
                </div>
            </div>

            <div className={'mt-10'}>
                {currentTab == 'active' ?
                    <div className={'grid grid-cols-3 gap-4'}>
                        {docs.map((doc, counter) => {
                            if (doc.status == 'pending') {
                                return (
                                    <Link key={counter} href={'/Новая_рекламация.pdf'}>
                                        <ReclamationBanner {...doc}></ReclamationBanner>
                                    </Link>
                                )
                            }
                        })}
                    </div> : null}
                {currentTab == 'closed' ?
                    <div className={'grid grid-cols-3 gap-4'}>
                        {docs.map((doc, counter) => {
                            if (doc.status != 'pending') {
                                return (
                                    <Link key={counter} href={'/Новая_рекламация.pdf'}>
                                        <ReclamationBanner {...doc}></ReclamationBanner>
                                    </Link>
                                )
                            }
                        })}
                    </div> : null}

                {currentTab == 'new' ?
                    <div  className={'w-full bg-white border-2 p-8 rounded-lg'} id={'pdf'}>
                        <div className={'grid grid-cols-8 items-start gap-9'}>
                            <div className={'flex col-span-1 flex-col gap-1'}>
                                <img src={'/images/logo_blue.svg'}/>
                                <p className={'font-semibold font-manrope text-orange'}>www.rosar-l.ru</p>
                            </div>
                            <div className={'flex -mt-2 col-span-2 flex-col gap-1'}>
                                <p className={'font-semibold font-manrope text-blue'}>Россия, 109383</p>
                                <p className={'font-semibold font-manrope text-blue'}>г. Москва, Батюнинский проезд, 11
                                    стр. 1</p>
                            </div>
                            <div className={'flex -mt-2 col-span-2 flex-col gap-1'}>
                                <p className={'font-semibold font-manrope text-blue'}>Тел: +7(499) 248-09-09</p>
                                <p className={'font-semibold font-manrope text-blue'}>E-mail: info@rosar-l.ru</p>
                            </div>
                        </div>
                        <div className={'mt-32 flex gap-2 items-center justify-center'}>
                            <p className={'font-manrope text-black text-xl font-bold'}>Рекламационный акт №</p>
                            <input
                                className={'border-[1px] px-1 w-32 font-manrope border-b-black text-lg text-black font-bold'}/>
                            <p className={'font-manrope text-black text-xl font-bold'}>от {new Date().toLocaleString("ru", {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            })}</p>
                        </div>
                        <div className={'mt-12 flex flex-col gap-2'}>
                            <p className={'font-manrope text-black text-lg font-normal'}>1. Наименование компании
                                заявителя гарантийного случая и адрес:</p>
                            <input
                                className={'border-[1px] px-1 w-full border-b-black font-manrope text-lg text-black font-semibold'}/>
                        </div>
                        <div className={'mt-10 flex flex-col gap-8 font-manrope'}>
                            <p className={'font-manrope text-black text-lg font-normal'}>2. Контактные данные
                                заявителя</p>
                            <div className={'grid grid-cols-3 items-center gap-3'}>
                                <p className={'col-span-1'}>ФИО:</p>
                                <input
                                    className={'border-[1px] px-1 w-full border-b-black font-manrope text-lg text-black font-semibold col-span-2'}/>
                                <p className={'col-span-1'}>E-mail:</p>
                                <input
                                    className={'border-[1px] px-1 w-full border-b-black font-manrope text-lg text-black font-semibold col-span-2'}/>
                                <p className={'col-span-1'}>Телефон для связи:</p>
                                <input
                                    className={'border-[1px] px-1 w-full border-b-black font-manrope text-lg text-black font-semibold col-span-2'}/>
                            </div>

                            <p className={'font-manrope text-black text-lg font-normal'}>Укажите вид несоответствия:</p>
                            <select onChange={(event) => {
                                if (event.target.value === 'quality' || event.target.value === 'wardrobe' || event.target.value === 'damaged' || event.target.value === 'refund') {
                                    setCurrentType(event.target.value)
                                }
                            }}
                                    className={'border-[1px] px-1 w-full border-b-black font-manrope text-lg text-black font-semibold'}>
                                <option selected={currentType == 'quality'}
                                        value={'quality'}>{translateType('quality')}</option>
                                <option selected={currentType == 'wardrobe'}
                                        value={'wardrobe'}>{translateType('wardrobe')}</option>
                                <option selected={currentType == 'damaged'}
                                        value={'damaged'}>{translateType('damaged')}</option>
                                <option selected={currentType == 'refund'}
                                        value={'refund'}>{translateType('refund')}</option>
                            </select>


                        </div>

                        <div className={'mt-10 flex flex-col gap-8 font-manrope'}>
                            <p className={'font-manrope text-black text-lg font-normal'}>3. Данные об изделиях</p>
                            <p className={'font-manrope text-black text-lg font-normal'}>{translateType(currentType)}</p>
                            {articulQnt.map((articul, count) => {
                                return (
                                    <div key={count} className={'mt-5 grid grid-cols-3'}>
                                        <div className={'w-full border-2 border-r-0 flex flex-col border-black'}>
                                            <div
                                                className={'border-b-black h-12 border-b-2 flex items-center justify-center'}>
                                                Наименование изделия
                                            </div>
                                            <div className={'flex p-3 items-center justify-center'}>
                                                <input placeholder={'Введите артикул'} list={'product_data'}
                                                       className={'border-[1px] p-1 w-full border-red-500 font-manrope text-base text-black font-semibold'}/>
                                                <datalist className={'w-full'} id={'product_data'}>
                                                    <option>Товар А</option>
                                                    <option>Товар Б</option>
                                                    <option>Товар В</option>
                                                    <option>Товар Г</option>
                                                    <option>Товар Д</option>
                                                    <option>Товар Е</option>
                                                    <option>Товар Ё</option>
                                                    <option>Товар Ж</option>
                                                    <option>Товар З</option>
                                                    <option>Товар И</option>
                                                    <option>Товар Й</option>
                                                    <option>Товар К</option>
                                                </datalist>
                                            </div>
                                        </div>
                                        <div className={'w-full border-2 border-r-0 flex flex-col border-black'}>
                                            <div
                                                className={'border-b-black h-12 border-b-2 flex items-center justify-center'}>Суть
                                                претензии
                                            </div>
                                            <div className={'flex p-3 items-center justify-center'}>
                                        <textarea rows={10} placeholder={'Опишите суть вашей претензии'}
                                                  className={'border-[1px] p-1 w-full border-red-500 font-manrope text-xs text-black font-semibold'}></textarea>
                                            </div>
                                        </div>
                                        <div className={'w-full border-2 flex flex-col border-black'}>
                                            <div
                                                className={'border-b-black h-12 border-b-2 flex items-center justify-center'}>Вид
                                                несоответствия
                                            </div>
                                            <div className={'flex p-3 items-center justify-center'}>
                                                <select onChange={(event) => {
                                                    if (event.target.value === 'quality' || event.target.value === 'wardrobe' || event.target.value === 'damaged' || event.target.value === 'refund') {
                                                        setCurrentType(event.target.value)
                                                    }
                                                }}
                                                        className={'border-[1px] p-1 w-full border-red-500 font-manrope text-base text-black font-semibold'}>
                                                    <option selected={currentType == 'quality'}
                                                            value={'quality'}>{translateType('quality')}</option>
                                                    <option selected={currentType == 'wardrobe'}
                                                            value={'wardrobe'}>{translateType('wardrobe')}</option>
                                                    <option selected={currentType == 'damaged'}
                                                            value={'damaged'}>{translateType('damaged')}</option>
                                                    <option selected={currentType == 'refund'}
                                                            value={'refund'}>{translateType('refund')}</option>
                                                </select>
                                            </div>
                                        </div>
                                        {currentType == 'wardrobe' ? <div
                                            className={'w-full border-2 border-r-0 border-t-0 flex flex-col border-black'}>
                                            <div
                                                className={'border-b-black h-12 border-b-2 flex items-center justify-center'}>Дата
                                                изготовления
                                            </div>
                                            <div className={'flex p-3 items-center justify-center'}>
                                                <ReactDatePicker locale="ru" calendarClassName={'font-travels'}
                                                                 className={'text-center font-manrope placeholder:text-black  placeholder:text-opacity-50 p-1 bg-transparent font-semibold text-black border-red-500 border-[1px] w-full focus:border-orange focus:outline-0 items-center gap-2'}
                                                                 dateFormat={'dd.MM.yyyy'} onChange={(date) => {
                                                    if (date) {
                                                        setCreationDate(date)
                                                    }
                                                }} selected={creationDate}></ReactDatePicker>
                                            </div>
                                        </div> : null}
                                        <div
                                            className={'w-full border-2 border-r-0 border-t-0 flex flex-col border-black'}>
                                            <div
                                                className={'border-b-black h-12 border-b-2 flex items-center justify-center'}>Дата
                                                обнаружения дефекта
                                            </div>
                                            <div className={'flex p-3 items-center justify-center'}>
                                                <ReactDatePicker locale="ru" calendarClassName={'font-travels'}
                                                                 className={'text-center font-manrope placeholder:text-black  placeholder:text-opacity-50 p-1 bg-transparent font-semibold text-black border-red-500 border-[1px] w-full focus:border-orange focus:outline-0 items-center gap-2'}
                                                                 dateFormat={'dd.MM.yyyy'} onChange={(date) => {
                                                    if (date) {
                                                        setDefectDate(date)
                                                    }
                                                }} selected={defectDate}></ReactDatePicker>
                                            </div>
                                        </div>
                                        <div
                                            className={classList('w-full border-2 border-t-0 flex flex-col border-black', currentType != 'wardrobe' ? 'border-r-0' : '')}>
                                            <div
                                                className={'border-b-black h-12 border-b-2 flex items-center justify-center'}>Количество
                                                (шт.)
                                            </div>
                                            <div className={'flex p-3 items-center justify-center'}>
                                                <input type={'number'} placeholder={'Количество поставленной продукции'}
                                                       className={'border-[1px] p-1 w-full text-center border-red-500 font-manrope text-base text-black font-semibold'}/>
                                            </div>
                                        </div>
                                        <div
                                            className={classList('w-full border-2 border-t-0 flex flex-col border-black', currentType == 'wardrobe' ? 'col-span-3' : 'col-span-1')}>
                                            <div
                                                className={'border-b-black h-12 border-b-2 flex items-center justify-center'}>Документы
                                                на поставку товара
                                            </div>
                                            <div className={'flex p-3 items-center justify-center'}>
                                                <DragNDrop className={'border-[1px] h-10 rounded-0'} setFile={() => {
                                                }}></DragNDrop>
                                            </div>
                                        </div>
                                        <div className={'col-span-3 flex items-center pt-5 justify-between'}>
                                            <p onClick={() => {
                                                let temp = [...articulQnt]
                                                console.log(articul)
                                                console.log(temp)
                                                temp.splice(articul-1, 1);

                                                setArticulQnt([...temp])
                                            }} className={'font-bold text-orange cursor-pointer text-xl'}>- Удалить</p>
                                            {count + 1 == articulQnt.length ? <p onClick={() => {
                                                setArticulQnt([...articulQnt, articul + 1])
                                            }} className={'font-bold text-orange cursor-pointer text-xl'}>+ Добавить
                                                артикул</p> : null}

                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                        <div className={'mt-12 flex flex-col gap-2'}>
                            <p className={'font-manrope text-black text-lg font-normal'}>4. Подробное описание
                                обнаруженных дефектов, поле для добавления файлов клиента (протоколы испытаний, копии
                                документов, фото, видео и прочее)</p>
                            <textarea rows={7}
                                      className={'border-[1px] px-1 w-full border-b-black font-manrope mb-5 text-lg text-black font-semibold'}></textarea>
                            {documentsQnt.map((docId, counter) => {
                                return (
                                    <div key={counter} className={'flex items-center gap-5'}>
                                        <div className={'w-48'}>
                                            <DragNDrop setFile={() => {
                                            }}></DragNDrop>
                                        </div>
                                        <img onClick={()=>{let temp=[...documentsQnt];temp.splice(counter,1);setDocumentsQnt([...temp])}} className={'w-5 cursor-pointer aspect-square'}
                                             src={'/images/icons/close_orange.svg'}/>
                                    </div>
                                )
                            })}
                            <p onClick={()=>{setDocumentsQnt([...documentsQnt,documentsQnt.length+1])}} className={'text-blue inline font-bold cursor-pointer font-manrope'}>+ Добавить ещё</p>
                        </div>
                        <div className={'mt-12 flex flex-col gap-2'}>
                            <p className={'font-manrope text-black text-lg font-normal'}>5. Требования клиента</p>
                            <select
                                className={'border-[1px] p-1 py-2 w-full border-b-black font-manrope text-lg text-black font-semibold'}>
                                <option>Допоставка</option>
                                <option>Возврат денежных средств</option>
                                <option>Реализация на излишки</option>
                                <option>Возврат излишка</option>
                            </select>
                        </div>
                        <div className={'mt-12 flex flex-col gap-2'}>
                            <p className={'font-manrope text-black text-lg font-normal'}>Подписи должностных лиц</p>
                            <div className={'px-32 mt-32 grid grid-cols-7 items-center gap-20'}>
                                <div className={'flex items-center font-manrope col-span-2 justify-center p-3 border-t-2 border-t-black'}>
                                    должность
                                </div>
                                <div className={'flex items-center font-manrope col-span-2 justify-center p-3 border-t-2 border-t-black'}>
                                    подпись
                                </div>
                                <div className={'flex items-center font-manrope col-span-3 justify-center p-3 border-t-2 border-t-black'}>
                                    ФИО
                                </div>
                            </div>
                        </div>
                    </div> : null}

                {currentTab != 'new' ?
                    <div className={'flex w-full col-span-3 items-center justify-center my-3 col-span-2'}>
                        <Pagination currentPage={1} setCurrentPage={() => {
                        }} pages={8}></Pagination>
                    </div> : null}

                {currentTab=='new'?<div className={'flex items-center mt-10 gap-10'}>
                    <Button type={'orange'}>Отправить рекламацию</Button>
                    <Button callback={()=>{createPDF()}} type={'blue-outlined'}>Скачать PDF</Button>
                </div>:null}
            </div>
        </main>
    )
}
