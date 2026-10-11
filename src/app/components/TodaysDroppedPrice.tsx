import React from 'react';
import { Itype } from '../types/type';
import Link from 'next/link';

const TodaysDroppedPrice = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data = await res.json();

    const droppedProducts: Itype[] = data.filter((h: Itype) => h.change.dir === "down").slice(0, 6);

    // console.log("d", droppedProducts);

    return (
        <div className="container mx-auto mt-14">
            <div>
                <h1 className="text-2xl font-bold py-3">
                    <span className="text-green-500">▼</span>
                    আজ দাম কমেছে
                </h1>

                <div className="grid grid-cols-3 gap-5">
                    {droppedProducts.map(d => (
                        <Link key={d.id} href={`/productsDetails/${d.id}`}>
                            <div>
                                <div className=" bg-white py-5 px-7 shadow-sm rounded-md">
                                    <div className="flex gap-4 py-2">
                                        <p className="bg-[#ebf3eb] text-2xl p-2 rounded-md">{d.image}</p>
                                        <div>
                                            <p>{d.nameBn}</p>
                                            <p>{d.unit}</p>
                                        </div>
                                    </div>
                                    <div>

                                        <p>আজকের দাম</p>
                                        <div className="flex justify-between">
                                            <p><span className="font-bold">{d.today} </span>টাকা</p>
                                            <p className="text-green-500">▼ {d.change.pct}%</p>
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