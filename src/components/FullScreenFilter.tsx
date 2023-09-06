"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import FullScreenFilterCategory from "@/components/FullScreenFilterCategory";

interface fullScreenFilterInterface {
    filterValues:Array<{name:string,value:string}>
    setFilterValues:(arg:Array<{name:string,value:string}>)=>any
    delivery:string,
    setDelivery:(arg:string)=>any,
    togglePop:any;
}

const FullScreenFilter = ({filterValues,setFilterValues,togglePop, setDelivery, delivery}:fullScreenFilterInterface) => {


    const pushToFilterValues=(name:string,value:string)=>{
        const findItem=filterValues.find(item=>item.name==name);
        if(findItem){
            findItem.value=value;
            setFilterValues([...filterValues,findItem])
        }
        else{
            let temp=[...filterValues];
            temp.push({name:name,value:value})
            setFilterValues([...temp])
        }
    }

    const shiftFromFilterValues=(name:string)=>{
        const findIndex=filterValues.findIndex(item=>item.name==name)
        if(findIndex!=undefined){
            let temp=[...filterValues]
            temp.splice(0,1);
            setFilterValues([...temp])
        }
    }

    const deliveryVariants=[
        '1-2 дня',
        '1 неделя',
        '2-3 недели'
    ]

    const categories=[
        {
            "name": "type",
            "value": "Категория 1",
            "subcategories": [
                {
                    "name": "type-2",
                    "value": "Категория 1-2",
                    "subcategories": [
                        {
                            "name": "type-2-3",
                            "value": "Категория 1-2-3",
                            "subcategories": [
                                {
                                    "name": "type-2-3-4",
                                    "value": "Категория 1-2-3-4",
                                    "subcategories": [
                                        {
                                            "name": "type-2-3-4-5",
                                            "value": "Категория 1-2-3-4-5",
                                            "subcategories": [
                                                {
                                                    "name": "type-2-3-4-5-6",
                                                    "value": "Категория 1-2-3-4-5-6"
                                                },
                                                {
                                                    "name": "type-2-3-4-5-7",
                                                    "value": "Категория 1-2-3-4-5-7"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "type-2-3-4-6",
                                            "value": "Категория 1-2-3-4-6"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-2-3-5",
                                    "value": "Категория 1-2-3-5",
                                    "subcategories": [
                                        {
                                            "name": "type-2-3-5-6",
                                            "value": "Категория 1-2-3-5-6"
                                        },
                                        {
                                            "name": "type-2-3-5-7",
                                            "value": "Категория 1-2-3-5-7"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "type-2-4",
                            "value": "Категория 1-2-4",
                            "subcategories": [
                                {
                                    "name": "type-2-4-5",
                                    "value": "Категория 1-2-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-2-4-5-6",
                                            "value": "Категория 1-2-4-5-6"
                                        },
                                        {
                                            "name": "type-2-4-5-7",
                                            "value": "Категория 1-2-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-2-4-6",
                                    "value": "Категория 1-2-4-6"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 1-3",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 1-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 1-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 1-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 1-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 1-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 1-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 1-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 1-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 1-4",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 1-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 1-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 1-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 1-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 1-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 1-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 1-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 1-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 1-5",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 1-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 1-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 1-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 1-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 1-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 1-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 1-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 1-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 1-6",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 1-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 1-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 1-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 1-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 1-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 1-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 1-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 1-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 1-7",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 1-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 1-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 1-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 1-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 1-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 1-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 1-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 1-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 1-8",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 1-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 1-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 1-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 1-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 1-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 1-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 1-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 1-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 1-9",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 1-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 1-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 1-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 1-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 1-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 1-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 1-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 1-3-5-7"
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            "name": "type",
            "value": "Категория 2",
            "subcategories": [
                {
                    "name": "type-2",
                    "value": "Категория 2-2",
                    "subcategories": [
                        {
                            "name": "type-2-3",
                            "value": "Категория 2-2-3",
                            "subcategories": [
                                {
                                    "name": "type-2-3-4",
                                    "value": "Категория 2-2-3-4",
                                    "subcategories": [
                                        {
                                            "name": "type-2-3-4-5",
                                            "value": "Категория 2-2-3-4-5",
                                            "subcategories": [
                                                {
                                                    "name": "type-2-3-4-5-6",
                                                    "value": "Категория 2-2-3-4-5-6"
                                                },
                                                {
                                                    "name": "type-2-3-4-5-7",
                                                    "value": "Категория 2-2-3-4-5-7"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "type-2-3-4-6",
                                            "value": "Категория 2-2-3-4-6"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-2-3-5",
                                    "value": "Категория 2-2-3-5",
                                    "subcategories": [
                                        {
                                            "name": "type-2-3-5-6",
                                            "value": "Категория 2-2-3-5-6"
                                        },
                                        {
                                            "name": "type-2-3-5-7",
                                            "value": "Категория 2-2-3-5-7"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "type-2-4",
                            "value": "Категория 2-2-4",
                            "subcategories": [
                                {
                                    "name": "type-2-4-5",
                                    "value": "Категория 2-2-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-2-4-5-6",
                                            "value": "Категория 2-2-4-5-6"
                                        },
                                        {
                                            "name": "type-2-4-5-7",
                                            "value": "Категория 2-2-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-2-4-6",
                                    "value": "Категория 2-2-4-6"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 2-3",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 2-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 2-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 2-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 2-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 2-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 2-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 2-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 2-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 2-4",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 2-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 2-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 2-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 2-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 2-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 2-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 2-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 2-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 2-5",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 2-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 2-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 2-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 2-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 2-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 2-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 2-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 2-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 2-6",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 2-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 2-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 2-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 2-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 2-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 2-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 2-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 2-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 2-7",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 2-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 2-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 2-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 2-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 2-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 2-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 2-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 2-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 2-8",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 2-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 2-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 2-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 2-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 2-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 2-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 2-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 2-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 2-9",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 2-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 2-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 2-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 2-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 2-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 2-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 2-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 2-3-5-7"
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            "name": "type",
            "value": "Категория 3",
            "subcategories": [
                {
                    "name": "type-2",
                    "value": "Категория 3-2",
                    "subcategories": [
                        {
                            "name": "type-2-3",
                            "value": "Категория 3-2-3",
                            "subcategories": [
                                {
                                    "name": "type-2-3-4",
                                    "value": "Категория 3-2-3-4",
                                    "subcategories": [
                                        {
                                            "name": "type-2-3-4-5",
                                            "value": "Категория 3-2-3-4-5",
                                            "subcategories": [
                                                {
                                                    "name": "type-2-3-4-5-6",
                                                    "value": "Категория 3-2-3-4-5-6"
                                                },
                                                {
                                                    "name": "type-2-3-4-5-7",
                                                    "value": "Категория 3-2-3-4-5-7"
                                                }
                                            ]
                                        },
                                        {
                                            "name": "type-2-3-4-6",
                                            "value": "Категория 3-2-3-4-6"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-2-3-5",
                                    "value": "Категория 3-2-3-5",
                                    "subcategories": [
                                        {
                                            "name": "type-2-3-5-6",
                                            "value": "Категория 3-2-3-5-6"
                                        },
                                        {
                                            "name": "type-2-3-5-7",
                                            "value": "Категория 3-2-3-5-7"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "type-2-4",
                            "value": "Категория 3-2-4",
                            "subcategories": [
                                {
                                    "name": "type-2-4-5",
                                    "value": "Категория 3-2-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-2-4-5-6",
                                            "value": "Категория 3-2-4-5-6"
                                        },
                                        {
                                            "name": "type-2-4-5-7",
                                            "value": "Категория 3-2-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-2-4-6",
                                    "value": "Категория 3-2-4-6"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 3-3",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 3-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 3-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 3-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 3-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 3-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 3-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 3-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 3-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 3-4",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 3-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 3-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 3-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 3-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 3-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 3-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 3-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 3-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 3-5",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 3-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 3-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 3-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 3-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 3-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 3-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 3-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 3-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 3-6",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 3-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 3-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 3-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 3-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 3-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 3-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 3-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 3-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 3-7",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 3-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 3-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 3-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 3-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 3-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 3-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 3-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 3-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 3-8",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 3-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 3-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 3-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 3-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 3-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 3-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 3-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 3-3-5-7"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type-3",
                    "value": "Категория 3-9",
                    "subcategories": [
                        {
                            "name": "type-3-4",
                            "value": "Категория 3-3-4",
                            "subcategories": [
                                {
                                    "name": "type-3-4-5",
                                    "value": "Категория 3-3-4-5",
                                    "subcategories": [
                                        {
                                            "name": "type-3-4-5-6",
                                            "value": "Категория 3-3-4-5-6"
                                        },
                                        {
                                            "name": "type-3-4-5-7",
                                            "value": "Категория 3-3-4-5-7"
                                        }
                                    ]
                                },
                                {
                                    "name": "type-3-4-6",
                                    "value": "Категория 3-3-4-6"
                                }
                            ]
                        },
                        {
                            "name": "type-3-5",
                            "value": "Категория 3-3-5",
                            "subcategories": [
                                {
                                    "name": "type-3-5-6",
                                    "value": "Категория 3-3-5-6"
                                },
                                {
                                    "name": "type-3-5-7",
                                    "value": "Категория 3-3-5-7"
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    ]
    const [activeCategory,setActiveCategory]=useState(categories[0])

    return (
        <div className={'w-full h-full grid gap-8 grid-cols-4'}>
            <div className={'h-full border-r-2 flex flex-col gap-4 items-start border-[#F1F1F1]'}>
                <p onClick={()=>{
                    setFilterValues([]);
                    togglePop();
                }} className={'text-md font-manrope text-[#8C8C8D] font-bold underline cursor-pointer'}>Сбросить фильтр</p>
                {categories.map((item)=>{
                    return(
                        <div className={'flex justify-start items-center gap-2'}>
                            <p onClick={()=>{setActiveCategory(item)}} className={classList('font-manrope transition-all duration-300 cursor-pointer text-2xl font-bold',item.value==activeCategory.value?'text-blue':'text-black')}>{item.value}</p>
                            {item.value==activeCategory.value?<img className={'w-4 aspect-square'} src={'/images/category_right.svg'}/>:null}
                        </div>
                    )
                })}
                <div className={'flex mt-32 flex-col gap-4'}>
                    <p className={'font-manrope transition-all duration-300 cursor-pointer text-2xl font-bold text-black'}>Доставка</p>
                    {deliveryVariants.map((item)=>{
                        return(
                            <div key={item} onClick={()=>{
                                if(item==delivery){
                                    setDelivery('');
                                }
                                else{
                                    setDelivery(item)
                                }
                            }} className={'flex items-center cursor-pointer gap-2'}>
                                {item==delivery?<img className={'w-5 aspect-square'} src={'/images/icons/radio_checked.svg'}/>:<img className={'w-5 aspect-square'} src={'/images/icons/radio.svg'}/>}
                                <p className={'text-xl font-manrope font-medium'}>{item}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={'col-span-3 flex flex-col gap-4'}>
                <p className={classList('font-manrope transition-all duration-300 cursor-pointer text-2xl font-bold text-blue')}>{activeCategory.value}</p>
                <div className={'w-full grid grid-cols-3 gap-8'}>
                    {activeCategory.subcategories.map((subcategory)=>{
                        return(
                            <div className={'flex flex-col gap-1'}>
                                <p className={'text-black font-bold font-manrope text-lg'}>
                                    {subcategory.value}
                                </p>
                                {subcategory.subcategories.map((item)=>{
                                    return(
                                        <FullScreenFilterCategory filter={filterValues} name={item.name} value={item.value} subcategories={item.subcategories} pushToFilter={pushToFilterValues} shiftFromFilter={shiftFromFilterValues}>

                                        </FullScreenFilterCategory>
                                    )
                                })}
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default FullScreenFilter;