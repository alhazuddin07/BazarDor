import React from 'react';
import { Itype } from '../types/type';
import Link from 'next/link';

const TodaysDroppedPrice = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data = await res.json();

    const droppedProducts: Itype[] = data.filter((h: Itype) => h.change.dir === "down").slice(0, 6);

    // console.log("d", droppedProducts);

    return (
        <div className="container mx-auto mt-8 sm:mt-10 md:mt-14 px-3 sm:px-4 lg:px-0">
            <div>
                <h1 className="text-xl sm:text-2xl font-bold py-3">
                    <span className="text-green-500">▼</span>
                    আজ দাম কমেছে
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                    {droppedProducts.map(d => (
                        <Link key={d.id} href={`/productsDetails/${d.id}`}>
                            <div>
                                <div className="bg-white py-4 px-4 sm:py-5 sm:px-5 lg:px-7 shadow-sm rounded-md">
                                    <div className="flex gap-3 sm:gap-4 py-2">
                                        <p className="bg-[#ebf3eb] text-xl sm:text-2xl p-2 rounded-md shrink-0">{d.image}</p>
                                        <div className="min-w-0">
                                            <p className="text-sm sm:text-base wrap-break-word">{d.nameBn}</p>
                                            <p className="text-xs sm:text-sm">{d.unit}</p>
                                        </div>
                                    </div>
                                    <div>

                                        <p className="text-xs sm:text-sm">আজকের দাম</p>
                                        <div className="flex justify-between items-center gap-2">
                                            <p className="text-sm sm:text-base"><span className="font-bold">{d.today} </span>টাকা</p>
                                            <p className="text-green-500 text-sm sm:text-base shrink-0">▼ {d.change.pct}%</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodaysDroppedPrice;