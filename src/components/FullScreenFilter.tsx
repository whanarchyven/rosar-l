"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import FullScreenFilterCategory from "@/components/FullScreenFilterCategory";
import {nanoid} from "nanoid";
import {nan} from "zod";

interface fullScreenFilterInterface {
    filterValues: Array<{ name: string, value: string }>
    setFilterValues: (arg: Array<{ name: string, value: string }>) => any
    delivery: string,
    setDelivery: (arg: string) => any,
    togglePop: any;
}

const FullScreenFilter = ({
                              filterValues,
                              setFilterValues,
                              togglePop,
                              setDelivery,
                              delivery
                          }: fullScreenFilterInterface) => {


    const pushToFilterValues = (name: string, value: string) => {
        const findItem = filterValues.find(item => item.name == name);
        if (findItem) {
            findItem.value = value;
            setFilterValues([...filterValues, findItem])
        } else {
            let temp = [...filterValues];
            temp.push({name: name, value: value})
            setFilterValues([...temp])
        }
    }

    const shiftFromFilterValues = (name: string) => {
        const findIndex = filterValues.findIndex(item => item.name == name)
        if (findIndex != undefined) {
            let temp = [...filterValues]
            temp.splice(0, 1);
            setFilterValues([...temp])
        }
    }

    const deliveryVariants = [
        '1-2 дня',
        '1 неделя',
        '2-3 недели'
    ]

    const categories = [
        {
            "name": "type",
            "value": "Инструмент",
            "subcategories": [{
                "name": "instrument",
                "value": "Аккумуляторный инструмент",
                "subcategories": [
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Дрели",

                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Шуруповерты",
                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "USB адаптеры",
                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Гайковерты",
                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Рубанки",
                    },
                ]
            },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                }]
        },
        {
            "name": "type",
            "value": "Инструмент 2",
            "subcategories": [{
                "name": "instrument",
                "value": "Аккумуляторный инструмент",
                "subcategories": [
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Дрели",

                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Шуруповерты",
                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "USB адаптеры",
                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Гайковерты",
                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Рубанки",
                    },
                ]
            },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                }]
        },
        {
            "name": "type",
            "value": "Инструмент 3",
            "subcategories": [{
                "name": "instrument",
                "value": "Аккумуляторный инструмент",
                "subcategories": [
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Дрели",

                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Шуруповерты",
                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "USB адаптеры",
                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Гайковерты",
                    },
                    {
                        "name": "accumulator_instrument_type",
                        "value": "Рубанки",
                    },
                ]
            },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                },
                {
                    "name": "instrument",
                    "value": "Аккумуляторный инструмент",
                    "subcategories": [
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Дрели",

                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Шуруповерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "USB адаптеры",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Гайковерты",
                        },
                        {
                            "name": "accumulator_instrument_type",
                            "value": "Рубанки",
                        },
                    ]
                }]
        }
    ]
    const [activeCategory, setActiveCategory] = useState(categories[0])

    return (
        <div className={'w-full h-full grid gap-8 grid-cols-4'}>
            <div className={'h-full border-r-2 flex flex-col gap-4 items-start border-[#F1F1F1]'}>
                <p onClick={() => {
                    setFilterValues([]);
                    togglePop();
                }} className={'text-md font-manrope text-[#8C8C8D] font-bold underline cursor-pointer'}>Сбросить
                    фильтр</p>
                {categories.map((item) => {
                    return (
                        <div key={nanoid()} className={'flex justify-start items-center gap-2'}>
                            <p onClick={() => {
                                setActiveCategory(item)
                            }}
                               className={classList('font-manrope transition-all duration-300 cursor-pointer text-2xl font-bold', item.value == activeCategory.value ? 'text-blue' : 'text-black')}>{item.value}</p>
                            {item.value == activeCategory.value ?
                                <img className={'w-4 aspect-square'} src={'/images/category_right.svg'}/> : null}
                        </div>
                    )
                })}
                {/*<div className={'flex mt-32 flex-col gap-4'}>*/}
                {/*    <p className={'font-manrope transition-all duration-300 cursor-pointer text-2xl font-bold text-black'}>Доставка</p>*/}
                {/*    {deliveryVariants.map((item) => {*/}
                {/*        return (*/}
                {/*            <div key={item} onClick={() => {*/}
                {/*                if (item == delivery) {*/}
                {/*                    setDelivery('');*/}
                {/*                } else {*/}
                {/*                    setDelivery(item)*/}
                {/*                }*/}
                {/*            }} className={'flex items-center cursor-pointer gap-2'}>*/}
                {/*                {item == delivery ?*/}
                {/*                    <img className={'w-5 aspect-square'} src={'/images/icons/radio_checked.svg'}/> :*/}
                {/*                    <img className={'w-5 aspect-square'} src={'/images/icons/radio.svg'}/>}*/}
                {/*                <p className={'text-xl font-manrope font-medium'}>{item}</p>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</div>*/}
            </div>
            <div className={'col-span-3 flex flex-col gap-4'}>
                <p className={classList('font-manrope transition-all duration-300 cursor-pointer text-2xl font-bold text-blue')}>{activeCategory.value}</p>
                <div className={'w-full grid grid-cols-3 auto-rows-min gap-8'}>
                    {activeCategory.subcategories.map((subcategory) => {
                        return (
                            <div key={nanoid()} className={'flex flex-col gap-1'}>
                                <FullScreenFilterCategory link={activeCategory.name+'='+activeCategory.value+'&'+subcategory.name+'='+subcategory.value} key={nanoid()} filter={filterValues} name={subcategory.name}
                                                          value={subcategory.value} subcategories={subcategory.subcategories}
                                                          pushToFilter={pushToFilterValues}
                                                          shiftFromFilter={shiftFromFilterValues}/>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default FullScreenFilter;